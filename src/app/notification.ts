import { User } from "./user";
import { bid } from "./bid";

export class notification{

    id: number;
    description: string;
    userone: User;
    usertwo: User;
    type: string;
    bid: bid;

}