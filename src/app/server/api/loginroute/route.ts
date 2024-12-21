import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "../../lib/db";
import { loginSchema } from "../../lib/loginmodel";

export async function GET() {
    await mongoose.connect(connectionStr);
    // await loginSchema.create({Name:'suraj',Username:"surajvs",Password:"123",Confirm_Password:"1234"});
    const data = await loginSchema.find();
    console.log( data);
    
    return NextResponse.json({result:data});
}
