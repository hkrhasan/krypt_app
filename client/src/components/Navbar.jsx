// hook import
import { useState } from 'react'
// icons
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

// images
import logo from '../../images/logo.png';


const NavBarItem = ({ title, classprops }) => {
    return <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
}


const Navbar = () => {
    // hooks initialize
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex justify-between items-center p-4 md:justify-center">
            {/* logo */}
            <div className="flex-initial justify-center items-center md:flex-[0.5]">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            {/* menu items for Desktop */}
            <ul className="text-white list-none flex-row justify-between items-center md:flex hidden">
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} />
                ))}

                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Login
                </li>
            </ul>
            <div className="flex relative">
                {/* toggle buttons */}
                <HiMenuAlt4 fontSize={28} className='text-white cursor-pointer md:hidden' onClick={() => setToggleMenu(true)} />
                
                {/* menu items for mobile */}
                {toggleMenu && 
                    <ul className='blue-glassmorphism fixed z-10 -top-0 -right-2 h-screen w-[70vw] animate-slide-in text-white shadow-2xl list-none p-3 flex flex-col justify-start items-end rounded-md md:hidden'>
                        <li className="text-xl w-full my-2"><AiOutlineClose className='cursor-pointer' onClick={() => setToggleMenu(false)} /></li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                            <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />
                        ))}
                    </ul>
                }  
            </div>
        </nav>
    )
}


export default Navbar