export class IdentificationModel {
    idNumber: string;
    idType: string;
    state: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;

    constructor(id: string, type: string, state: string, fname: string, lname: string, dob: string) {
        this.idNumber = id;
        this.idType = type;
        this.state = state;
        this.firstName = fname;
        this.lastName = lname;
        this.dateOfBirth = dob
    }
}