import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
import {  AiOutlineArrowRight, AiFillPlayCircle  } from 'react-icons/ai';
import {  RxCaretRight } from 'react-icons/rx';
import img1 from '/public/images/Vector (2).png'
import img2 from '/public/images/Vector (1).png'
import img3 from '/public/images/Vector (3).png'
import img from '/public/images/Vector.png'
import img78 from '/public/images/image 78.png'
import img77 from './../public/images/image 77.png'




export default function Home(){
  const [navbar, setNavbar] = useState(false);
  return (
    <>
    <Head>
    <link href="//db.onlinewebfonts.com/c/a8ba6f94174cce25e3e649102351f3eb?family=Sporting+Grotesque" rel="stylesheet" type="text/css"/>

    </Head>
      {/* <Navbar /> */}
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

      {/* Header */}
      <div className="flex flex-col md:flex-row mt-12 md:ml-24 ">
        <div className='basis-1/2 ml-4'>
            <h1 className=' mt-16 mb-6'>Healthy in side <span>fresh</span> out side</h1>
            <p>Exercise is a very important need for our body. Health and <br /> fitness will be obtained if you can do regular exercise and <br /> run a healthy routine.</p>
            <div className='flex mt-5'>
                <div className='basis-1/3 '>
              
                  <button  className="rounded-lg Getbtn flex ">Get Started <RxCaretRight size={30} style={{color:'black', backgroundColor:'white', borderRadius: '50%', marginLeft:'52px'}}  /></button>

                </div>
                <div className='basis-1/3'>
              
                  <button  className="rounded-lg Learnbtn flex "> <AiFillPlayCircle size={30} style={{marginRight:'15px'}} /> Learn More</button>                  
            </div>
                <div className='basis-1/3'>
              
                      
                  </div>             
            </div>

        </div>
        <div className='basis-1/2 md:ml-44'>
           
          <Image className='mr--4 sm:ml-4' src={img77} width={358}
      height={580} alt="" />
        </div>
        </div>
        <div className="flex flex-col md:flex-row mt-16 md:ml-28  justify-center items-center">
          <div className='basis-1/3 '>
            <h3>
            Healthy in side <br /> fresh out side
            </h3>
          </div>
          <div className='basis-2/3 md:pl-16 '>
            <p> Exercise is a very important need for our body. Health and fitness will be obtained <br /> if you can do regular exercise and run a healthy routine. Even at home we still have <br /> to be diligent in exercising, either alone or with your friends at home. Healthy life <br /> makes you more excited to live the day</p>
          </div>
          
        </div>
    

    <div className="container mx-auto">
     
      {/* <MainSection /> */}
      <div className="flex flex-col md:flex-row main md:my-32 md:mx-32 justify-center items-center">
            <div className="basis-1/3">
               <div className="flex justify-center items-center">
                <div className="basis-1/2 icon">
                
                <Image src={img} width={8} height={8} style={{ marginLeft: 'auto', marginTop:"25px",
  marginRight: 'auto'}} />
                <Image src={img1} width={38} height={40} style={{ marginLeft: 'auto',
  marginRight: 'auto'}} />
                
                     </div>
                <div className="basis-1/2">
                    <h4>Get that 11 line in 30 days</h4>
                    <div className="flex mt-4 items-center">
                        <div className='basis-2/3'>
                        <p>learn more</p>

                        </div>
                        <div className='1/3'>
                        <AiOutlineArrowRight />

                        </div>
                   
                    

                    </div>
                </div>

            </div>
            </div>
            <div className="basis-1/3">
            <div className="flex justify-center items-center ">
                <div className="basis-1/2 icon">
                <Image src={img} width={8} height={8} style={{ marginLeft: 'auto', marginTop:"25px",
  marginRight: 'auto'}} />
                <Image src={img2} width={38} height={40} style={{ marginLeft: 'auto',
  marginRight: 'auto'}} />
                    
                     </div>
                <div className="basis-1/2">
                    <h4>14 Days sherd challenge</h4>
                    <div className="flex mt-4 items-center">
                        <div className='basis-2/3'>
                        <p>learn more</p>

                        </div>
                        <div className='1/3'>
                        <AiOutlineArrowRight />

                        </div>
                   
                    

                    </div>
                </div>          

            </div>
            </div>
            <div className="basis-1/3">
            <div className="flex justify-center items-center ">
                <div className="basis-1/2 icon">
                <Image src={img} width={8} height={8} style={{ marginLeft: 'auto', marginTop:"25px",
  marginRight: 'auto'}} />
                <Image src={img3} width={38} height={40} style={{ marginLeft: 'auto',
  marginRight: 'auto'}} />
                     </div>
                <div className="basis-1/2">
                    <h4>Get flat belly in 30 days</h4>
                    <div className="flex mt-4 items-center">
                        <div className='basis-2/3'>
                        <p>learn more</p>

                        </div>
                        <div className='1/3'>
                        <AiOutlineArrowRight />

                        </div>
                   
                    

                    </div>
                   

                </div>            

            </div>

            </div>           
        </div>


        <div className="flex flex-col md:flex-row mt-12 md:ml-24 ">
        <div className='basis-1/2 md:ml-40'>
           
           <Image className='mr--4 sm:ml-4' src={img78} width={416}
       height={496} alt="" />
         </div>
        <div className='basis-1/2 ml-4'>
            <h3 className=' mt-16 mb-6 md:pr-20'>Best full body <br /> workout to lose fat</h3>
            <p >Exercise is a very important need for our body. Health and fitness <br /> will be obtained if you can do regular exercise and run a healthy <br /> routine. Even at home we still have to be diligent in exercising, either <br /> alone or with your friends at home. </p>
            <div className='flex mt-5'>
                <div className='basis-1/3 '>
              
                  <button  className="rounded-lg Getbtn flex ">Get Started <RxCaretRight size={30} style={{color:'black', backgroundColor:'white', borderRadius: '50%', marginLeft:'52px'}}  /></button>

                </div>
               
                <div className='basis-1/3'>
              
                      
                  </div>             
            </div>

        </div>
       
        </div>
       
   
    </div>
    </>
  );
}

