import { Injectable } from '@nestjs/common';

@Injectable()
export class AssignmentsService {
        private assignments: Assignment[] = [];
    async addAssignment(assignment:Assignment) {
           this.assignments.push(assignment);
            }
    async findOne(id: string): Promise<Assignment | undefined> {
        return this.assignments.find(assignment => assignment.id === id);
      }
    update(id: string, updatedAssignment: Assignment): void {
           const assignmentIndex = this.assignments.findIndex(assignment => assignment.id === id);
           if (assignmentIndex > -1) {
             this.assignments[assignmentIndex] = updatedAssignment;
           }
         }
    delete(id: string): void {
           this.assignments = this.assignments.filter(assignment => assignment.id !== id);
         }
    findAll(): Assignment[] {
        return this.assignments;
      }
}
