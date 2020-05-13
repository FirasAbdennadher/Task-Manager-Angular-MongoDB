export class User {
    public id: string;
    constructor(
        public username?: string,
        public password?: string,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public role?: string
        ) {

    }

}
