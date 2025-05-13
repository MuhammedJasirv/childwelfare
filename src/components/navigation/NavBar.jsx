import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/navbar/logoCenter.png';
import Phone from '../../assets/images/navbar/phone.png';
import Mail from '../../assets/images/navbar/mail.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [current, setCurrent] = useState("Home");
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='h-20 flex justify-between items-center bg-white px-4 lg:px-0 relative'>
            {/* Desktop Navigation */}
            {!isMobile ? (
                <>
                    <div className="flex justify-center items-center ml-10 xl:ml-40">
                        <ul className='flex justify-end font-nav font-bold gap-10 xl:gap-20 px-10'>
                            <li className={`${current === "Home" ? "text-textgree" : "text-black"} cursor-pointer hover:text-textgree transition-colors`} 
                                onClick={() => { setCurrent("Home") }}>Home</li>
                            <li className={`${current === "Donate" ? "text-textgree" : "text-black"} cursor-pointer hover:text-textgree transition-colors`} 
                                onClick={() => { setCurrent("Donate") }}>Donate</li>
                            <li className={`${current === "Contact" ? "text-textgree" : "text-black"} cursor-pointer hover:text-textgree transition-colors`} 
                                onClick={() => { setCurrent("Contact") }}>Contact Us</li>
                        </ul>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={Logo} alt="child welfare kerala" className="h-16 w-auto" />
                    </div>

                    <div className="flex justify-center items-center">
                        <div className='bg-navgreenBg flex p-2 px-4 rounded-3xl gap-2 text-white justify-center items-center mr-10 xl:mr-20'>
                            <img src={Phone} alt="Phone" className="h-4 w-auto" />
                            <p className="text-sm xl:text-base ">0471 2324939</p>
                            <img src={Mail} alt="mail" className="h-4 w-auto" />
                            <p className="text-sm xl:text-base">childwelfarekerala@gmail.com</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Mobile Header */}
                    <div className="flex items-center w-full justify-between">
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-textgree focus:outline-none"
                        >
                            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>

                        <div className="flex justify-center items-center">
                            <img src={Logo} alt="child welfare kerala" className="h-14 w-auto" />
                        </div>

                        <div className="w-8"></div> {/* Spacer for balance */}
                    </div>

                    {/* Mobile Menu with Animation */}
                    <div className={`absolute top-20 left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                        <ul className='flex flex-col font-nav font-bold'>
                            <li 
                                className={`${current === "Home" ? "text-textgree" : "text-black"} cursor-pointer py-4 px-6 border-b border-gray-100 hover:text-textgree transition-colors`} 
                                onClick={() => { 
                                    setCurrent("Home");
                                    setMenuOpen(false);
                                }}
                            >
                                Home
                            </li>
                            <li 
                                className={`${current === "Donate" ? "text-textgree" : "text-black"} cursor-pointer py-4 px-6 border-b border-gray-100 hover:text-textgree transition-colors`} 
                                onClick={() => { 
                                    setCurrent("Donate");
                                    setMenuOpen(false);
                                }}
                            >
                                Donate
                            </li>
                            <li 
                                className={`${current === "Contact" ? "text-textgree" : "text-black"} cursor-pointer py-4 px-6 border-b border-gray-100 hover:text-textgree transition-colors`} 
                                onClick={() => { 
                                    setCurrent("Contact");
                                    setMenuOpen(false);
                                }}
                            >
                                Contact Us
                            </li>
                            <li className='py-4 px-6'>
                                <div className='bg-navgreenBg flex p-2 px-4 rounded-3xl gap-2 text-white justify-center items-center'>
                                    <img src={Phone} alt="Phone" className="h-4 w-auto" />
                                    <p className="text-sm">0471 2324939</p>
                                </div>
                            </li>
                            <li className='py-4 px-6'>
                                <div className='bg-navgreenBg flex p-2 px-4 rounded-3xl gap-2 text-white justify-center items-center'>
                                    <img src={Mail} alt="mail" className="h-4 w-auto" />
                                    <p className="text-sm">childwelfarekerala@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default NavBar;