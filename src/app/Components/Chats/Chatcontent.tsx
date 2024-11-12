import React from 'react'
import Avatar from '../Avtaar';
interface chatcontprop {
    user:string,
    msg: string,
    image:string
}
const Chatcontent: React.FC<chatcontprop> = (props) => {
    return (
        <div
            // style={{ animationDelay: `0.8s` }}
            className={`chat__item w-[100%] flex ${props.user =="me"?  "justify-end items-end" :" justify-start items-start"} mb-3 `}
        >
            <div className="chat__item__content flex  flex-col  border-2 max-w-[50%] min-w-[20%] rounded-md py-2 px-3  mr-2">
                <div className="chat__msg flex text-wrap text-xl pb-1">{props.msg}</div>
                <div className="chat__meta  flex justify-between items-center text-xs text-gray-100 ">
                    <span>16 mins ago</span>
                    <span>Seen 1.03PM</span>
                </div>
            </div>
            <Avatar image={props.image} />
        </div>
    )
}

export default Chatcontent