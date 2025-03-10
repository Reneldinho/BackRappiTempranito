import { Schema, model } from "mongoose";

let Collection = "books";
let schema = Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publisher: { type: String, required: true },
    yearOfPublication: { type: Number, required: true },
    pages: { type: Number, required: true },
    volumes: { type: String, required: true }
},{
    timestamps: true
});

let Book = model(Collection, schema);
export default Book;