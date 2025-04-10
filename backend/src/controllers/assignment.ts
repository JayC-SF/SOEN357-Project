import { Request, Response } from 'express';
import { ENV_VARS } from '../configs/env';
import { z } from 'zod';
import { Logger } from '../configs/logger';
import { StatusCodes } from 'http-status-codes';

const createAssignmentBodySchema = z.object({
  id: z.number().min(1, 'id field is required.'), // Ensures name is a non-empty string
  title: z.string().min(1, 'title field is required.'), // Ensures name is a non-empty string
  description: z.string().min(1, 'description field is required.'), // Ensures name is a non-empty string
  dueDate: z
    .string()
    .transform((val) => new Date(val))
    .refine((val) => !isNaN(val.getTime()), {
      message: 'Invalid date format',
    }),
});
type CreateAssignmentDTO = {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
};
export const createAssignmentController = async (req: Request, res: Response) => {
  let body: CreateAssignmentDTO;
  try {
    body = createAssignmentBodySchema.parse(req.body);
    // create user
  } catch (error) {
    Logger.error('Error creating assignment: ', req.body);
    Logger.error('Received error: ', error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Error occurred while creating a new assignment.' });
    return;
  }
  try {
    const prompt = `
Split this assignment or task request into manageable tasks.
USER INPUT:
\`\`\`
ID:
${body.id}
TITLE:
${body.title}
Description:
${body.description}
DUE DATE:
${body.dueDate.toISOString()}
\`\`\`
You are an assistant that generates a JSON response in this Assignment format:

\`\`\`ts
type Status = 'In Progress' | 'Completed' | 'Not Started'
interface Task {
id: number;
title: string;
completed: boolean;
}
interface Phase {
id: number;
title: string;
description: string;
progress: number;
startDate: Date;
endDate: Date;
tasks: Task[];
}
interface Assignment {
id: number;
title: string;
description: string;
dueDate: Date;
status: Status;
progress: number;
phases: Phase[];
}
\`\`\`

Now use the following data to generate a valid JSON response only. 
Create a series of phases and for each phases create a series of tasks for the user.
Return ONLY the JSON, no extra explanation.
`;

    const geminiResponse = await callGeminiAPI(prompt);
    let cleanedResponse = geminiResponse.candidates[0].content.parts[0].text.replace('```json', '');
    cleanedResponse = cleanedResponse.replace(/```/g, '').trim();
    const response = JSON.parse(cleanedResponse) as Assignment;

    res.status(200).json(response);
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process assignment data' });
    return;
  }
};

type Status = 'In Progress' | 'Completed' | 'Not Started';
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
interface Phase {
  id: number;
  title: string;
  description: string;
  progress: number;
  startDate: Date;
  endDate: Date;
  tasks: Task[];
}
interface Assignment {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  status: Status;
  progress: number;
  phases: Phase[];
}

type GeminiPart = {
  text: string;
};
type GeminiContent = {
  parts: GeminiPart[];
};
type GeminiCandidates = {
  content: GeminiContent;
};
type GeminiResponse = {
  candidates: GeminiCandidates[];
};
async function callGeminiAPI(prompt: string): Promise<GeminiResponse> {
  const searchParams = new URLSearchParams({ key: ENV_VARS.GEMINI_API_KEY });

  const res = await fetch(ENV_VARS.GEMINI_URL + searchParams.toString(), {
    method: 'POST',
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });
  if (!res.ok) {
    throw new Error("Couldn't fetch from Gemini API");
  }
  const gem = await res.json();
  // console.log(JSON.stringify(gem, null, 2));
  return gem;
}
