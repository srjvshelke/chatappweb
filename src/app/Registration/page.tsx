"use client"

import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";

import Backgroundforlogin from '../../public/chattingimg.jpg';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from '../REDUX/Reducer/AuthSlice';

const page: React.FC = () => {
    const dispatch = useDispatch();
    // const { error, loading, isAuthenticated } = useSelector(
    //     (state) => state.user
    // );
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
        dispatch(SignUp(Registration));
        e.preventDefault();
        alert(`Name : ${Registration.Name} and Username : ${Registration.Username}  and Password : ${Registration.Password} and confirmPAssword : ${Registration.Confirm_Password}`);

        console.log(`Name : ${Registration.Name} and Username : ${Registration.Username}  and Password : ${Registration.Password} and confirmPAssword : ${Registration.Confirm_Password}`);

        setRegistration({
            Name: "",
            Username: "",
            Password: "",
            Confirm_Password: ""
        })
    }

    return (
        <div className='Loginpage w-full h-screen flex py-4 px-4'>
            <div className='left w-[50%] h-[100%]' >
                <div className='loginside w-[100%] h-[100%] flex flex-col justify-center items-center bg-slate-400 '>
                    <form className='w-[100%] h-[100%] py-4 px-7 flex flex-col justify-center items-center' action="#" method="POST" onSubmit={submit}>
                        <h2 className='font-bold text-4xl mb-6 '>Welcome</h2>

                        <div className="flex flex-col w-[60%]">
                            <label className="block text-gray-700 text-lg font-bold mb-2">
                                Name
                            </label>
                            <input id="Name" name="Name" type="Name" value={Registration.Name} required
                                className=" bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 appearance-none block focus:outline-none focus:shadow-outline"
                                placeholder="Enter your Name" onChange={userregisterdata} />
                        </div>
                        <div className="mt-4 flex flex-col w-[60%]">
                            <label className="block text-gray-700 text-lg font-bold mb-2">
                                Username
                            </label>
                            <input id="username" name="Username" type="username" value={Registration.Username} required
                                className=" bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 appearance-none block focus:outline-none focus:shadow-outline"
                                placeholder="Enter your Username" onChange={userregisterdata} />
                        </div>
                        <div className="mt-4 flex flex-col w-[60%]">
                            <label className=" block text-gray-700 text-lg font-bold mb-2">
                                Password
                            </label>
                            <input id="Password" name="Password" type="Password" value={Registration.Password} required
                                className=" bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 appearance-none block focus:outline-none focus:shadow-outline"
                                placeholder="Enter your Password" onChange={userregisterdata} />

                        </div>

                        <div className="mt-4 flex flex-col w-[60%]">
                            <label className=" block text-gray-700 text-lg font-bold mb-2">
                                Confirm Password
                            </label>
                            <input id="Confirm_Password" name="Confirm_Password" type="Password" value={Registration.Confirm_Password} required
                                className=" bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 appearance-none block focus:outline-none focus:shadow-outline"
                                placeholder="Enter your Confirm_Password" onChange={userregisterdata} />

                        </div>

                        <div className=" mt-8 w-[60%]">
                            <button className='border border-black w-full  bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600'>Sign Up</button>
                        </div>




                        <div className=" mt-8 w-[60%]  text-center text-lg">
                            Already have an account?
                            <Link href="#" className="font-medium text-indigo-500 underline-offset-4 hover:underline">Login Here</Link>
                        </div>

                    </form>

                </div>

                {/*  */}

            </div>
            <div className=" right w-[50%] h-[100%]">
                <div className="m-12 w-full h-full"
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundImage:
                            `url(${Backgroundforlogin})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                </div>
            </div>


        </div>
        // <div className="signup  min-h-screen  flex flex-col justify-center items-center  py-12 sm:px-6 lg:px-8">
        //     <div className="box h-[50%] w-[35%] border-2 border-zinc-950 px-7 pt-5 pb-4 flex flex-col justify-center items-center  bg-red-500">
        //         <h1 className='text-center font-bold from-neutral-100 text-4xl pb-5' >SignUp</h1>
        //         <form className="space-y-6" action="#" method="POST" onSubmit={submit}>
        //             <div className="  flex flex-col justify-center items-center">
        //                 <div className="mt-3">
        //                     <label className="block text-sm font-medium text-gray-700">
        //                         Name
        //                     </label>
        //                     <input id="Name" name="Name" type="Name" required value={Registration.Name}
        //                         className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        //                         placeholder="Enter your Name" onChange={userregisterdata} />
        //                 </div>
        //                 <div className="mt-1">
        //                     <label className="block text-sm font-medium text-gray-700">
        //                         Username
        //                     </label>
        //                     <input id="username" name="Username" type="username" required value={Registration.Username}
        //                         className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        //                         placeholder="Enter your Username" onChange={userregisterdata} />
        //                 </div>


        //                 <div className="mt-3">
        //                     <label className="block text-sm font-medium text-gray-700">
        //                         Password
        //                     </label>
        //                     <input id="Password" name="Password" type="Password" required value={Registration.Password}
        //                         className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        //                         placeholder="Enter your Password" onChange={userregisterdata} />
        //                 </div>

        //                 <div className="mt-3">
        //                     <label className="block text-sm font-medium text-gray-700">
        //                         Confirm Password
        //                     </label>
        //                     <input id="confirm_Password" name="Confirm_Password" type="confirm_Password" required value={Registration.Confirm_Password}
        //                         className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        //                         placeholder="Enter your confirm_Password" onChange={userregisterdata} />
        //                 </div>
        //                 <div className="mt-5">
        //                     <button className='border border-black px-7 py-2'>Sign Up</button>
        //                 </div>
        //             </div>

        //             {/* <div className="inputs flex flex-col justify-center items-center">
        //                 <input type="text" className="username text-center my-3 px-5 py-2" placeholder='Username' />
        //                 <input type="text" className="password text-center my-3 px-5 py-2" placeholder='Password' />
        //                 <button className="signinbtn bg-teal-200 px-6 py-1.5 mt-7 mb-4">Sign In</button>
        //             </div>
        //             <div className="forget ">
        //                 <Link href={"/Chat"} className="flex text-right">Forget Password</Link>

        //             </div> */}
        //         </form>
        //     </div>
        // </div>

    )


}

export default page;
