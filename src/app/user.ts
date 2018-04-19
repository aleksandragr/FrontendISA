import { Reservation } from "./reservation";

export class User{

    id: number;
    name: string;
    email: string;
    surname: string;
    password: string;
    newPassword: string;
    repeatPassword: string;
    city: string;
    phoneNumber: string;
    reservations: Reservation[];
    role: string;
    adminFchangep: string;
}