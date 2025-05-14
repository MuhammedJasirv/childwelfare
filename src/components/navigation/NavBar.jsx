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
            setIsMobile(window.innerWidth < 1024); // Using your --breakpoint-lg: 1024px
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
                    <div className="flex justify-center items-center ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-20 2xl:ml-40">
                        <ul className='flex justify-end font-nav font-bold gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-16 2xl:gap-20 px-4 sm:px-6 md:px-8 lg:px-5 nv:10'>
                            <li className={`${current === "Home" ? "text-textgree" : "text-black"} cursor-pointer hover:text-textgree transition-colors text-sm nv:text[12px] lg:text-[10px] xl:text-base`} 
                                onClick={() => { setCurrent("Home") }}>Home</li>
                            <li className={`${current === "Donate" ? "text-textgree" : "text-black"} cursor-pointer hover:text-textgree transition-colors text-sm nv:text[12px] lg:text-[10px] xl:text-base`} 
                                onClick={() => { setCurrent("Donate") }}>Donate</li>
                            <li className={`${current === "Contact" ? "text-textgree" : "text-black"} cursor-pointer hover:text-textgree transition-colors text-sm nv:text[12px] lg:text-[10px] xl:text-base`} 
                                onClick={() => { setCurrent("Contact") }}>Contact Us</li>
                        </ul>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={Logo} alt="child welfare kerala" className="h-14 sm:h-16 w-auto" />
                    </div>

                    <div className="flex justify-center items-center">
                        <div className='bg-navgreenBg flex p-1 sm:p-2 px-2 sm:px-4 rounded-3xl gap-1 sm:gap-2 text-white justify-center items-center mr-4 sm:mr-6 md:mr-8 lg:mr-10 xl:mr-16 2xl:mr-20'>
                            <img src={Phone} alt="Phone" className="h-3 sm:h-4 w-auto" />
                            <p className="text-xs sm:text-sm md:text-base whitespace-nowrap">0471 2324939</p>
                            <img src={Mail} alt="mail" className="h-3 sm:h-4 w-auto" />
                            <p className="text-xs sm:text-sm md:text-base whitespace-nowrap hidden sm:inline">childwelfarekerala@gmail.com</p>
                            <p className="text-xs sm:hidden">email</p>
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
                            <img src={Logo} alt="child welfare kerala" className="h-12 sm:h-14 w-auto" />
                        </div>

                        <div className="w-8"></div> {/* Spacer for balance */}
                    </div>

                    {/* Mobile Menu with Animation */}
                    <div className={`absolute top-20 left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                        <ul className='flex flex-col font-nav font-bold'>
                            <li 
                                className={`${current === "Home" ? "text-textgree" : "text-black"} cursor-pointer py-3 sm:py-4 px-4 sm:px-6 border-b border-gray-100 hover:text-textgree transition-colors text-sm sm:text-base`} 
                                onClick={() => { 
                                    setCurrent("Home");
                                    setMenuOpen(false);
                                }}
                            >
                                Home
                            </li>
                            <li 
                                className={`${current === "Donate" ? "text-textgree" : "text-black"} cursor-pointer py-3 sm:py-4 px-4 sm:px-6 border-b border-gray-100 hover:text-textgree transition-colors text-sm sm:text-base`} 
                                onClick={() => { 
                                    setCurrent("Donate");
                                    setMenuOpen(false);
                                }}
                            >
                                Donate
                            </li>
                            <li 
                                className={`${current === "Contact" ? "text-textgree" : "text-black"} cursor-pointer py-3 sm:py-4 px-4 sm:px-6 border-b border-gray-100 hover:text-textgree transition-colors text-sm sm:text-base`} 
                                onClick={() => { 
                                    setCurrent("Contact");
                                    setMenuOpen(false);
                                }}
                            >
                                Contact Us
                            </li>
                            <li className='py-3 sm:py-4 px-4 sm:px-6 border-b border-gray-100'>
                                <div className='bg-navgreenBg flex p-1 sm:p-2 px-2 sm:px-4 rounded-3xl gap-1 sm:gap-2 text-white justify-center items-center'>
                                    <img src={Phone} alt="Phone" className="h-3 sm:h-4 w-auto" />
                                    <p className="text-xs sm:text-sm">0471 2324939</p>
                                </div>
                            </li>
                            <li className='py-3 sm:py-4 px-4 sm:px-6'>
                                <div className='bg-navgreenBg flex p-1 sm:p-2 px-2 sm:px-4 rounded-3xl gap-1 sm:gap-2 text-white justify-center items-center'>
                                    <img src={Mail} alt="mail" className="h-3 sm:h-4 w-auto" />
                                    <p className="text-xs  sm:text-sm">childwelfarekerala@gmail.com</p>
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