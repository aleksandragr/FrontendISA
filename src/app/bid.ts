import { User } from "./user";
import { announcement } from "./announcement";

export class bid{

    id: number;
    offered: string;
    user: User;
    announcement: announcement;
    accept: boolean;
}




