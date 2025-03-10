import { Schema, model } from "mongoose";

let Collection = "elevators";
let schema = Schema({
    model: { type: String, required: true },
    speed: { type: String, required: true },
    security: { type: String, required: true },
    energyEfficiency: { type: String, required: true }
},{
    timestamps: true
});

let Elevator = model(Collection, schema);
export default Elevator;