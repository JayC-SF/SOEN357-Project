import { Assignment } from "../pages/Dashboard";

export function getAssignments() {
    const assignments = localStorage.getItem('assignments') || '[]';
    return JSON.parse(assignments) as Assignment[];
}

export function storeAssignments(assignments: Assignment[]) {
    localStorage.setItem('assignments', JSON.stringify(assignments));
}