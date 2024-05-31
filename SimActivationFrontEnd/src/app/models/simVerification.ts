export class SimVerificationModel {
    simNumber: string;
    serviceNumber: string;
    userID: number;
    isVerified: boolean;
    message: string;

    constructor(simNum: string, serviceNum: string, verified: boolean = false, msg: string = "Empty", userId: number = -1) {
        this.simNumber = simNum;
        this.serviceNumber = serviceNum;
        this.isVerified = verified;
        this.message = msg;
        this.userID = userId;
    }
}