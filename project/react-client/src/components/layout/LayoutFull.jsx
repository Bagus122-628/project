import React from "react"
import Footer from "../footer/Footer"
import Navbar from "../navigation/Navbar"

export default function LayoutFull(props) {
  return (
    <div className='bg-color2 grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <Navbar />
      <div className='flex justify-center'>
        <main className='w-full text-primary'>{props.children}</main>
      </div>
      <Footer />
    </div>
  )
}
