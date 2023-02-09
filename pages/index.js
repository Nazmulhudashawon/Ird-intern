import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { AiOutlineArrowRight, AiFillPlayCircle } from 'react-icons/ai';
import { RxCaretRight } from 'react-icons/rx';
import img1 from '../public/images/Vector (2).png';
import img2 from '../public/images/Vector (1).png';
import img3 from '../public/images/Vector (3).png';
import img from '../public/images/Vector.png';
import img78 from '../public/images/image 78.png';
import img77 from '../public/images/image 77.png';
import nike from '../public/images/nike.png';
import puma from '../public/images/puma.png';
import addidas from '../public/images/Adidas_logo.png';
import reebok from '../public/images/reebok.png';

import styles from '@/styles/Home.module.css';

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Head>
        <link
          href="//db.onlinewebfonts.com/c/a8ba6f94174cce25e3e649102351f3eb?family=Sporting+Grotesque"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      {/* <Navbar /> */}
      <nav className=" container mx-auto w-100% md:ml-12 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <h2 className="text-2xl" style={{ color: '#6765F0' }}>
                <span className="text-white"> Gym </span> baran
              </h2>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose size={20} style={{ color: 'black' }} />
                  ) : (
                    <AiOutlineMenu size={20} style={{ color: 'black' }} />
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
                  <button
                    onClick={() => setNavbar(!navbar)}
                    className="rounded-lg"
                  >
                    Log in
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* _____________Header_______________ */}

      <div className="flex flex-col md:flex-row mt-12 md:ml-20 ">
        <div className="basis-1/2 md:w-142">
          <h1 className=" mt-16 mb-6 ">
            Healthy in side <span>fresh</span> out side
          </h1>
          <p>
            Exercise is a very important need for our body. Health and <br />{' '}
            fitness will be obtained if you can do regular exercise and <br />{' '}
            run a healthy routine.
          </p>
          <div className="flex mt-5">
            <div className="basis-1/3 ">
              <button className="rounded-lg Getbtn flex ">
                Get Started{' '}
                <RxCaretRight
                  size={30}
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    marginLeft: '52px',
                  }}
                />
              </button>
            </div>
            <div className="basis-1/3">
              <button className="rounded-lg Learnbtn flex ">
                {' '}
                <AiFillPlayCircle
                  size={30}
                  style={{ marginRight: '15px' }}
                />{' '}
                Learn More
              </button>
            </div>
            <div className="basis-1/3"></div>
          </div>
          <h5 className=" my-8 text-xl">Brands:</h5>
          <div className="flex flex-row items-center">
            <div className="">
              <Image src={nike} width={60} height={60} alt="" />
            </div>
            <div>
              <Image
                className=" ml-6 md:ml-16"
                src={addidas}
                width={60}
                height={60}
                alt=""
              />
            </div>
            <div>
              <Image
                className=" ml-6 md:ml-16"
                src={puma}
                width={60}
                height={60}
                alt=""
              />
            </div>
            <div>
              <Image
                className=" ml-6 md:ml-16"
                src={reebok}
                width={60}
                height={60}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="basis-1/2 md:ml-56">
          <Image
            className="mt-8 mx-auto md:mt-0 md:mx-0"
            src={img77}
            width={358}
            height={580}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-16 md:ml-24  justify-center items-center">
        <div className="basis-1/3 ">
          <h3 className="mx-2">
            Healthy in side <br /> fresh out side
          </h3>
        </div>
        <div className="basis-2/3 md:pl-16  ">
          <p className="p-4">
            {' '}
            Exercise is a very important need for our body. Health and fitness
            will be obtained <br /> if you can do regular exercise and run a
            healthy routine. Even at home we still have <br /> to be diligent in
            exercising, either alone or with your friends at home. Healthy life{' '}
            <br /> makes you more excited to live the day
          </p>
        </div>
      </div>

      {/* ____________________MainSection________________-  */}

      <div className="mx-auto">
        <div className="flex flex-col md:flex-row main md:my-32 md:mx-20  md:ml-24 md:justify-center md:items-center md:py-24">
          <div className="basis-1/3">
            <div className="flex justify-center items-center">
              <div className=" icon">
                <Image
                  src={img}
                  width={8}
                  height={8}
                  style={{
                    marginLeft: 'auto',
                    marginTop: '25px',
                    marginRight: 'auto',
                  }}
                />
                <Image
                  src={img1}
                  width={38}
                  height={40}
                  style={{ marginLeft: 'auto', marginRight: 'auto' }}
                />
              </div>
              <div className="basis-1/2 ">
                <h4>
                  Get that 11 line <br /> in 30 days
                </h4>
                <div className="flex mt-4 items-center">
                  <div className="basis-1/2">
                    <p className="text-white">learn more</p>
                  </div>
                  <div>
                    <AiOutlineArrowRight color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex justify-center items-center ">
              <div className=" icon">
                <Image
                  src={img}
                  width={8}
                  height={8}
                  style={{
                    marginLeft: 'auto',
                    marginTop: '25px',
                    marginRight: 'auto',
                  }}
                />
                <Image
                  src={img2}
                  width={38}
                  height={40}
                  style={{ marginLeft: 'auto', marginRight: 'auto' }}
                />
              </div>
              <div className="basis-1/2">
                <h4>
                  14 Days <br /> sherd challenge
                </h4>
                <div className="flex mt-4 items-center">
                  <div className="basis-1/2">
                    <p className="text-white">learn more</p>
                  </div>
                  <div>
                    <AiOutlineArrowRight color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex justify-center items-center ">
              <div className=" icon">
                <Image
                  src={img}
                  width={8}
                  height={8}
                  style={{
                    marginLeft: 'auto',
                    marginTop: '25px',
                    marginRight: 'auto',
                  }}
                />
                <Image
                  src={img3}
                  width={38}
                  height={40}
                  style={{ marginLeft: 'auto', marginRight: 'auto' }}
                />
              </div>
              <div className="basis-1/2">
                <h4>
                  Get flat belly <br /> in 30 days
                </h4>
                <div className="flex mt-4 items-center">
                  <div className="basis-1/2">
                    <p className="text-white">learn more</p>
                  </div>
                  <div>
                    <AiOutlineArrowRight color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-12 md:ml-24 ">
          <div className="basis-1/2 ">
            <Image
              className=" md:ml-20 sm:ml-4"
              src={img78}
              width={416}
              height={496}
              alt=""
            />
          </div>
          <div className="basis-1/2 ml-4">
            <h3 className=" mt-16 mb-6 md:pr-20">
              Best full body <br /> workout to lose fat
            </h3>
            <p>
              Exercise is a very important need for our body. Health and fitness{' '}
              <br /> will be obtained if you can do regular exercise and run a
              healthy <br /> routine. Even at home we still have to be diligent
              in exercising, either <br /> alone or with your friends at home.{' '}
            </p>
            <div className="flex mt-16">
              <div className="basis-1/3 ">
                <button className="rounded-lg Getbtn flex  ">
                  Get Started{' '}
                  <AiOutlineArrowRight
                    color="white"
                    size={20}
                    style={{
                      marginLeft: '60px',
                    }}
                  />
                </button>
              </div>

              <div className="basis-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
