//Esto define lo que estoy escribiendo en mi codigo
import {Document} from "mongoose"
export interface Producto extends Document {
    readonly name: string;
    readonly description: string;
    readonly imageURL: string;
    readonly price: number;
    readonly createAt: Date;
}