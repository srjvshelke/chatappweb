import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { FaEllipsisH } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Chatitems from './Chatitems';
const Leftchatpart: React.FC = () => {
    return (
        <div className="chat_left h-[100%] w-[30%] border-r-2 border-zinc-950 px-7 pt-5 pb-2 flex flex-col items-center  bg-slate-100">

            <div className="btn flex justify-between items-center  bg-slate-200 px-5 py-2 rounded-b w-[60%] ">
                <CiSquarePlus />
                <span className='text-center'>New Conversation</span>
            </div>
            <div className="chatlist__heading flex justify-between  items-center  w-[100%] my-3">
                <h2 className='font-bold text-2xl'>Chats</h2>
                <button className="btn-nobg">
                    <FaEllipsisH />
                </button>
            </div>
            <div className="search_wrap bg-slate-200 rounded-md flex items-center justify-center  w-[100%] my-3">
                <input type="text" placeholder="Search Here" required className="bg-transparent border-none p-2 outline-none w-[80%] pr-0" />
                {/* <button > */}
                <IoSearch className="search-btn bg-transparent w-[20%] fle justify-center items-center  " />
                {/* </button> */}
            </div>
            <div className="chat-items w-[100%] mt-5 max-h-[calc(100vh - calc(100vh / 2))] overflow-x-auto no-s">
                {/* chatitems */}
                <Chatitems />
                <Chatitems />
                <Chatitems />
                <Chatitems />
                <Chatitems />
                <Chatitems />
                <Chatitems />

            </div>

        </div>
    )
}

export default Leftchatpart
