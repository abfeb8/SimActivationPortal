import { Address } from "./address";

export class User {
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    email?: string;
    address?: Address


    constructor(fn: string = "", ln: string = "", dob: string = "", email: string = "") {
        this.firstName = fn;
        this.lastName = ln;
        this.dateOfBirth = dob;
        this.email = email;
    }
}