import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    return (
      <div>
        <nav className="w-full top-0 left-0 right-0 z-10">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {/* LOGO */} 
                  <h2 className="text-2xl" style={{color:"#6765F0"}} ><span className="text-white"> Gym  </span>  baran</h2>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
            <AiOutlineClose size={20} style={{ color: "black" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: "black" }} />
          )}
                </button>
              </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <li className="pb-6 text-xl text-black py-2 md:px-4 text-center font-poppins ">
                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                      Home
                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-black py-2 px-4 text-center  ">
                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                      Program
                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-black py-2 px-4 text-center">
                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                     Blog
                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-black py-2 px-4 text-center  ">
                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                      About Us
                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-black py-2 px-4 text-center  ">
                  <button onClick={() => setNavbar(!navbar)} className="rounded-lg">Log in</button>
                  </li>
                 
                
                 
                </ul>
                
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
export default Navbar;