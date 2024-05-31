import { User } from "./user";

export class UserVerificationModel {
    user?: User;
    userId?: number;
    isVerified: boolean;
    message: string;

    constructor(user: User, userId: number, verified: boolean = false, msg: string = "Empty") {
        this.user = user;
        this.userId = userId;
        this.isVerified = verified;
        this.message = msg;
    }
}