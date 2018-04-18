import { Projectionterm } from "./projectionterm";
import { Seat } from "./seat";
import { User } from "./user";

export class Reservation{

    id: number;
    ordinal: string;
    projectionterm: Projectionterm;
    seats: Seat[];
    user1: User;
    dateA: any;
    projectionA: any;
}