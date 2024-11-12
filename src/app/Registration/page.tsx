"use client" 

import React, { useState } from 'react'

const page: React.FC = () => {
    const [Registration, setRegistration] = useState({
        Name: "",
        Username: "",
        Password: "",
        Confirm_Password: ""
    });

    let name, value;

    const userregisterdata = (e) => {
        name = e.target.name;
        value = e.target.value;
        setRegistration({ ...Registration, [name]: value });
    }

    //
    const submit = (e) => {
        e.preventDefault();
        alert(`Name : ${Registration.Name} and Username : ${Registration.Username}  and Password : ${Registration.Password} and confirmPAssword : ${Registration.Confirm_Password}`);
        setRegistration({
            Name: "",
            Username: "",
            Password: "",
            Confirm_Password: ""
        })
    }
    return (
        <div className="signup  min-h-screen  flex flex-col justify-center items-center  py-12 sm:px-6 lg:px-8">
            <div className="box h-[50%] w-[35%] border-2 border-zinc-950 px-7 pt-5 pb-4 flex flex-col justify-center items-center  bg-red-500">
                <h1 className='text-center font-bold from-neutral-100 text-4xl pb-5' >SignUp</h1>
                <form className="space-y-6" action="#" method="POST" onSubmit={submit}>
                    <div className="  flex flex-col justify-center items-center">
                        <div className="mt-3">
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input id="Name" name="Name" type="Name" required value={Registration.Name}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your Name" onChange={userregisterdata} />
                        </div>
                        <div className="mt-1">
                            <label className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input id="username" name="Username" type="username" required value={Registration.Username}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your Username" onChange={userregisterdata} />
                        </div>


                        <div className="mt-3">
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input id="Password" name="Password" type="Password" required value={Registration.Password}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your Password" onChange={userregisterdata} />
                        </div>

                        <div className="mt-3">
                            <label className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input id="confirm_Password" name="Confirm_Password" type="confirm_Password" required value={Registration.Confirm_Password}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your confirm_Password" onChange={userregisterdata} />
                        </div>
                        <div className="mt-5">
                            <button className='border border-black px-7 py-2'>Sign Up</button>
                        </div>
                    </div>

                    {/* <div className="inputs flex flex-col justify-center items-center">
                        <input type="text" className="username text-center my-3 px-5 py-2" placeholder='Username' />
                        <input type="text" className="password text-center my-3 px-5 py-2" placeholder='Password' />
                        <button className="signinbtn bg-teal-200 px-6 py-1.5 mt-7 mb-4">Sign In</button>
                    </div>
                    <div className="forget ">
                        <Link href={"/Chat"} className="flex text-right">Forget Password</Link>

                    </div> */}
                </form>
            </div>
        </div>

    )
}

export default page;
