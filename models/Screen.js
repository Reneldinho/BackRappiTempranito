import { Schema, model } from "mongoose";

let Collection = "screens";
let schema = new Schema({
    brightness: { type: String, required: true },
    contrast: { type: String, required: true },
    resolution: { type: String, required: true },
    size: { type: String, required: true },
    model: { type: String, required: true }
}, {
    timestamps: true
});

let Screen = model(Collection, schema);
export default Screen;