import { Schema, model } from "mongoose";

let Collection = "cellulars";
let schema = Schema({
    models: { type: String, required: true },
    color: { type: String, required: false },
    version: { type: String, required: true }
}, {
    timestamps: true
});

let Cellular = model(Collection, schema);
export default Cellular;