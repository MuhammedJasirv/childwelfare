import React, { useState } from 'react'
import Logo from '../../assets/images/navbar/logoCenter.png'
import Phone from '../../assets/images/navbar/phone.png'
import Mail from '../../assets/images/navbar/mail.png'

const NavBar = () => {
    const [current,setCurrent]=useState("Home")
  return (
    <div className=' h-20 flex justify-between bg-white'>
        <div className=" flex justify-center items-center ml-40  ">
            <ul className='flex justify-end font-nav font-bold gap-20 px-10 '>
                <li className={`${current === "Home" ? "text-textgree" : "text-black"} cursor-pointer`} onClick={()=>{setCurrent("Home")}}>Home</li>
                <li className={`${current === "Donate" ? "text-textgree" : "text-black"} cursor-pointer`} onClick={()=>{setCurrent("Donate")}}>Donate</li>
                <li className={`${current === "Contact" ? "text-textgree" : "text-black"} cursor-pointer`} onClick={()=>{setCurrent("Contact")}}>Contact Us</li>
            </ul>
        </div>
        <div className=" flex justify-center items-center">
            <img src={Logo} alt="child welfare kerala" />
        </div>
        <div className=" flex justify-center items-center ">
            <div className='bg-navgreenBg flex p-2 px-4 rounded-3xl gap-2 text-white justify-center items-center mr-20'>
                <img src={Phone} alt="Phone " />
                <p>0471 2324939</p>
                <img src={Mail} alt="mail" />
                <p>childwelfarekerala@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar