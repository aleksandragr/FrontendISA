import { Hall } from "./hall";
import { Projectiondate} from "./projectiondate";

export class Projectionterm{

    id: number;
    term: Date;
    hall: Hall;
    price: string;
    projectiondate: Projectiondate;
}