'use client'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../REDUX/store'

const Mainlayout =({children}:{children:ReactNode}) =>{
  return (
    <div>
        {/* <h1>mychatting app</h1> */}
        <main>
          <Provider store={store}>{children}</Provider> </main>
    </div>
  )
}

export default Mainlayout