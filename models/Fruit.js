import { Schema, model } from "mongoose";

let Collection = "fruits";
let schema = Schema({
    name: { type: String, required: true },
    fruitColor: { type: String, required: true },
    size: { type: String, required: true },
    weight: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true }
},{
    timestamps: true
});

let Fruit = model(Collection, schema);
export default Fruit;