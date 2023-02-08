import Image from 'next/image';
import {  AiOutlineArrowRight, AiFillPlayCircle  } from 'react-icons/ai';
import {  RxCaretRight } from 'react-icons/rx';
import Head from 'next/head';
import img1 from '/public/images/Vector (2).png'
import img2 from '/public/images/Vector (1).png'
import img3 from '/public/images/Vector (3).png'
import img from '/public/images/Vector.png'
import img78 from '/public/images/image 78.png'
function Main() {
    return (
        <>
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
       
        </>
        
    );
}

export default Main;