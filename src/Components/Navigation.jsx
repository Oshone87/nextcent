import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa'; // Corrected import for FaBars and FaTimes
import { IoIosArrowRoundForward } from 'react-icons/io';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
        <header className='md:px-14 p-4 max-w-screen-2x1 flex md:justify-between  items-center border-b mx-auto bg-white rounded px-5 py-3 fixed top-0 right-0 left-0'>
            <Link to='/'>
                <img src="assets/images/Logo.jpg" alt="logo" className="" />
            </Link>

            {/* Desktop nav */}
            <div className='hidden md:flex w-3/5  justify-between items-center'>
                <nav>
                    <ul className='flex justify-start space-x-10'>
                        <li>
                            <NavLink  to="/" className="text-secondary transition-all">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="text-secondary transition-all">Features</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="text-secondary transition-all">Community</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="text-secondary transition-all">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="text-secondary transition-all">Pricing</NavLink>
                        </li>
                    </ul>
                </nav>
                <div classname=''>
                <button className='bg-primary text-white px-5 py-3 rounded flex items-center'>
                      Register Now <IoIosArrowRoundForward className='ml-2' />
                  </button>

                </div>
            </div>

            {/* menu btn for mobile */}
            <div className='md:hidden ml-48 item-center'>
                <button onClick={toggleMenu} className="text-primary  focus:outline-none">
                    {
                     isMenuOpen ? (<FaTimes className='w-6 h-6 text-primary'/>) : (<FaBars className='w-6 h-6 text-primary'/>)
                    }
                  
                </button>
            </div>
            {/* nav for mobile */}
           
        </header>
         <div className={`space-y-4 px-4 pt-24 pb-5  bg-primary text-xl ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
           
         <NavLink to="/" className="block text-white" onClick={toggleMenu}>Home</NavLink>
         <NavLink to="/features" className="block text-white" onClick={toggleMenu}>Features</NavLink>
         <NavLink to="/community" className="block text-white" onClick={toggleMenu}>Community</NavLink>
         <NavLink to="/blog" className="block text-white" onClick={toggleMenu}>Blog</NavLink>
         <NavLink to="/pricing" className="block text-white" onClick={toggleMenu}>Pricing</NavLink>
     </div>
     </>
    );
}

export default Navigation;
