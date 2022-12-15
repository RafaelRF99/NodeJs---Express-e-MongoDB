import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, require: true },
        nacionalidade: { type: String }
    },
    {
        versionKey: false
    }
)

const autores = mongoose.model("autores", autorSchema) // autores vai estar relacionado ao autoSchema

export default autores;