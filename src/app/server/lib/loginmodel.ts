import mongoose from "mongoose";

const loginmodel = new mongoose.Schema({
    Name:String,
    Username:String,
    Password:String,
    Confirm_Password:String
})

export const loginSchema = mongoose.models.login || mongoose.model("login",loginmodel);