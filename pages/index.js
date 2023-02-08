import img from './../public/images/image 77.png'
import Navbar from '../pages/Navbar';
import Image from 'next/image'
import { AiFillPlayCircle } from 'react-icons/ai';
import {  RxCaretRight } from 'react-icons/rx';
import Head from 'next/head';

// import Header from "@/Components/Header";
import MainSection from "@/Components/MainSection";




export default function Home(){
  return (
    <>
    <Head>
    <link href="//db.onlinewebfonts.com/c/a8ba6f94174cce25e3e649102351f3eb?family=Sporting+Grotesque" rel="stylesheet" type="text/css"/>

    </Head>
      <Navbar />
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
           
          <Image className='mr--4 sm:ml-4' src={img} width={358}
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
      {/* <Header /> */}
      <MainSection />
   
    </div>
    </>
  );
}

