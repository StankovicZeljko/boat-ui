export class BoatRequest {

    name: string;
    capacity: number;
    description: string;
    available: boolean;

    constructor(name: string, capacity: number, description: string, available: boolean) {
        this.name = name;
        this.capacity = capacity;
        this.description = description;
        this.available = available;
    }
}
