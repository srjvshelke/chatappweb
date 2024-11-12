import React from 'react'
import Avatar from '../Avtaar'

const  Chatitems : React.FC=()=> {
  return (
    <div className='Chatitem flex border-b-2 border-x- p-2 bg-slate-50 w-[100%] cursor-pointer my-2  items-center rounded-md '>
      <Avatar    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" />
      <div className="userMeta">
        <p className='font-bold text-lg' >name</p>
        <span className="activeTime font-normal text-sm m-0 p-0 block ">32 mins ago</span>
      </div>
    </div>
  )
}

export default Chatitems