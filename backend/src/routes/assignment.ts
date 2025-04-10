import { Router } from 'express';
import { createAssignmentController } from '../controllers/assignment';

const router = Router();

router.post('/new', createAssignmentController);

export default router;
