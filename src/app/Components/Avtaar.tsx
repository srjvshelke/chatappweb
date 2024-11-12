import React from 'react';
// import logo from "../../../public/logo.png"
import Image from 'next/image';
interface imageprops {
image ?:string
}
const  Avatar : React.FC<imageprops>=({image})=> {
    return (
        <div className="avatar  mr-5">
            <div className="avatar-img overflow-hidden rounded-full">
                <Image  className="object-cover" src={ image?  image : "/logo.png"} alt="#" width="50" height="50" />
            </div>
            <span className=""></span>
        </div>
    )
}

export default Avatar