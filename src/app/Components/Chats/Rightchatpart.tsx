'use client'

import React, { useState } from 'react'
import Avatar from '../Avtaar';
import { FaCog } from "react-icons/fa";
import Chatcontent from './Chatcontent';
import { FaPlus } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../REDUX/Reducer/chatSlice';
const Rightchatpart: React.FC = () => {
   const chatedata =  useSelector((state)=>{ return state.chats ;});

const dispatch = useDispatch() ;
const [msginput,setmsginput] = useState(''); 
    var chatItms = [
        {
            key: 1,
            image:
                "/logo.png",
            type: "",
            msg: "Hi suraj, How are you?",
        },
        {
            key: 2,
            image:
                "/logo.png",
            type: "other",
            msg: "I am fine.",
        },
        {
            key: 3,
            image:
                "/logo.png",
            type: "other",
            msg: "What about you?",
        },
        {
            key: 4,
            image:
                "/logo.png",
            type: "",
            msg: "Awesome these days.",
        },
        {
            key: 5,
            image:
                "/logo.png",
            type: "other",
            msg: "Finally. What's the plan?",
        },
        {
            key: 6,
            image:
                "/logo.png",
            type: "",
            msg: "what plan mate?",
        },
        {
            key: 7,
            image:
                "/logo.png",
            type: "other",
            msg: "I'm taliking about the tutorial",
        },
    ];

    const AddChart =()=>{
        dispatch(addItem(msginput));
        setmsginput("");
        console.log(chatedata);
        
        
    }
    return (
        <div className="chat_right h-[100%] w-[70%] px-5 py-3 bg-slate-500 ">
            <div className="content__header h-[10%] W-[100%] flex justify-between items-center border-b-2 border-y-slate-400 pb-2">
                <div className="current-chatting-user flex justify-center items-center">
                    <Avatar image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
                    />
                    <p>Suraj</p>
                </div> 
                
                <div className="settings">
                    <button className="btn-nobg">
                        <FaCog />
                        {/* <i className="fa fa-cog"></i> */}
                    </button>
                </div>
            </div>
            <div className="content__body h-[80%] py-2 w-[100%]  overflow-auto backdrop:"> 
                {
                    chatedata.chats.map((itm, index) => {
                        return (
                            <Chatcontent
                                key={index}
                                user={itm.type ? itm.type : "me"}
                                msg={itm}
                                image="/logo.png"
                            />
                        );
                    })
                } 
            </div>
            <div className="content__footer h-[10%] W-[100%] flex justify-between items-center  p-[10px] bg-slate-100">
                <button className="addFiles w-[36px] h-[36px] bg-white text-sky-400 flex justify-center items-center rounded ">
                <FaPlus />
                </button>
                <input
                    type="text"
                    placeholder="Type a message here"
                     className='bg-transparent border-none outline-none flex-grow-1 p-[0.15px] W-[100%]'
                onChange={(e)=>{setmsginput(e.target.value)}}
                value={msginput}
                />
                <button className="btnSendMsg  w-[36px] h-[36px] bg-blue-700 text-white flex justify-center items-center rounded " onClick={AddChart}>
                    <FaPaperPlane />
                </button>
            </div>
        </div>
    )
}

export default Rightchatpart