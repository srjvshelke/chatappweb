"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const page: React.FC = () => {
    const [logindata, setlogindata] = useState({
        Username: "",
        Password: ""
    })
    let name, value;
    const userlogindata = (e) => {
        name = e.target.name;
        value = e.target.value;
        setlogindata({ ...logindata, [name]: value });
    }
    //
    const submit = (e) => {
        e.preventDefault();
        alert(`Username : ${logindata.Username}  and Password : ${logindata.Password}`);
        setlogindata({
            Username: "",
            Password: ""
        })
    }

    return (
        <div className="login  min-h-screen  flex flex-col justify-center items-center  py-12 sm:px-6 lg:px-8">
            <div className="box h-[50%] w-[35%] border-2 border-zinc-950 px-7 pt-5 pb-4 flex flex-col justify-center items-center  bg-red-500">
                <h1 className='text-center font-bold from-neutral-100 text-4xl pb-5' >Sign In</h1>
                <form className="space-y-6" action="#" method="POST" onSubmit={submit}>
                    <div className="  flex flex-col justify-center items-center">
                        <div className="mt-1">
                            <label className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input id="username" name="Username" type="username" value={logindata.Username} required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your Username" onChange={userlogindata} />
                        </div>
                        <div className="mt-3">
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input id="Password" name="Password" type="Password" value={logindata.Password} required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your Password" onChange={userlogindata} />

                        </div>
                        <div className="mt-5">
                            <button className='border border-black px-7 py-2'>Sign In</button>
                            <Link href={"/"} className="flex text-right">forget password?</Link>
                        </div>
                    </div>
                    {/* <div className="inputs flex flex-col justify-center items-center">
                        <input type="text" className="username text-center my-3 px-5 py-2" placeholder='Username' />
                        <input type="text" className="password text-center my-3 px-5 py-2" placeholder='Password' />
                        <button className="signinbtn bg-teal-200 px-6 py-1.5 mt-7 mb-4">Sign In</button>
                    </div> */}

                    <div className="forget ">
                        Don't have an account?
                        <Link href={"/Registration"} className="flex text-right">Sign up</Link>

                    </div>
                </form>
            </div>


        </div>





    )
}

export default page;
