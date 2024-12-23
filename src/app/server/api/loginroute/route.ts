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

// const { createHash } = require('node:crypto');

// export default async function handler(req, res) {
//     if (req.method == "GET") {
//         await mongoose.connect(connectionStr);
//         const data = await loginSchema.find();
//     console.log( data);

//         return NextResponse.json({ result: data });
//     }
//     // if (req.method == "POST") {
//     //     const username = req.body['username']
//     //     const password = req.body['password']
//     //     const cofirmpassword = req.body['cofirmpassword']
//     //     if (password != cofirmpassword) {
//     //         res.redirect("/signup?msg=The two passwords don't match");
//     //         return;
//     //     }
//     //     res.status(201).send("all ok");
//     //     // const client = await clientPromise;
//     //     // const db = client.db("Users");
//     //     // const users = await db.collection("Profiles").find({"Username": username}).toArray();
//     //     // if (users.length > 0){
//     //     //     res.redirect("/signup?msg=A user already has this username");
//     //     //     return;
//     //     // }
//     //     // const password_hash = createHash('sha256').update(password).digest('hex');
//     //     // const currentDate = new Date().toUTCString();
//     //     //     const bodyObject = {
//     //     //         Username: username,
//     //     //         Password: password_hash,
//     //     //         Created: currentDate
//     //     //     }
//     //     //     await db.collection("Profiles").insertOne(bodyObject);
//     //     //     const cookies = new Cookies(req, res)
//     //     //     cookies.set('username', username)
//     //     //     res.redirect("/")
//     //     //   } else {
//     //     //     res.redirect("/")
//     //     //   }
//     // }
// }