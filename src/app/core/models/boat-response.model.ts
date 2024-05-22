export class BoatResponse {

    id: number;
    name: string;
    capacity: number;
    description: string;
    available: boolean;

    constructor(id: number, name: string, capacity: number, description: string, available: boolean) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.description = description;
        this.available = available;
    }
}
