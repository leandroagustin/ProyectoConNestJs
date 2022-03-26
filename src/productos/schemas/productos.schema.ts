import { Schema } from "mongoose";

export const ProductoSchema = new Schema({
    name: String,
    description: String,
    imageURL: String,
    price: Number,
    createAt: { type: Date, default: Date.now//Si no le paso fecha de creacion lo va a hacer por mi
    },
});

