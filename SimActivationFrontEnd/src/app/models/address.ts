export class Address {
    address?: string;
    state?: string;
    city?: string;
    pincode?: string;
    userId?: number

    constructor(add: string, stat: string, city: string, pin: string) {
        this.address = add;
        this.state = stat;
        this.city = city;
        this.pincode = pin
    }
}