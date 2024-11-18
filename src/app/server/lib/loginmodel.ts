import mongoose from "mongoose";

const loginmodel = new mongoose.Schema({
    name:String
})

export const loginSchema = mongoose.models.login || mongoose.model("login",loginmodel);