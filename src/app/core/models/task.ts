import { Project } from './project';
import { User } from './user';
 enum Status {
    TODO,
    IN_PROGRESS,
    FINISHED
}
export class Task {
    public uuid: string;
    public status = Status.TODO;
    public workedIn?: number ;
    constructor(
        public project?: Project,
        public assignedTo?: User,
        public title?: string,
        public description?: string,
        public files?: string [],
        public estimation?: number,

    ) {

    }
}
