import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoStorefrontOutline } from "react-icons/io5";
import group117 from "../assets/group-117.svg"
import rect54 from "../assets/rectangle54.png"
import group752 from "../assets/group-752.svg"
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Pricing = () => {
  return (
    <div className='w-full h-fit flex flex-col'>
            <div className="fixed mt-8  w-full h-[20px]  flex flex-row items-center justify-between  px-6 box-border  max-w-full  text-zinc-700 font-sans">
                {/* <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 bg-white" /> */}
                <div className="flex flex-row items-start left-1 py-0 px-6">
                    <img
                        className="relative w-28 h-16 object-cover z-20"
                        loading="lazy"
                        alt=""
                        src={logo}
                    />
                </div>
                <div className="flex flex-row items-start justify-start gap-4 max-w-full z-1">
                    <img
                        className="relative w-12 h-12 min-h-12"
                        loading="lazy"
                        alt=""
                        src={group117}
                    />
                    <Link to="/profilesettings">
                        <img
                            className="relative w-12 h-12 min-h-12"
                            loading="lazy"
                            alt=""
                            src={group752}
                        /></Link>
                    <Link to="/profile">
                        <div className="flex flex-row items-center justify-start gap-2">
                            <img
                                className="relative rounded-2xl w-12 h-12 object-cover"
                                loading="lazy"
                                alt=""
                                src={rect54}
                            />
                            <div className="flex flex-col items-start justify-start gap-0.5">
                                <div className="relative tracking-[-0.02em] font-semibold whitespace-nowrap">
                                    Adam Cooper
                                </div>
                                <div className="relative text-sm tracking-[-0.02em] whitespace-nowrap">
                                    adamcooper@gmail.com
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
           
            <div className='flex  w-full mt-20 h-fit'>
             
                {/* left */}
                <div className='w-[20%]  bg-white flex flex-col '>
                    <Link to='/dashboard' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2 ' >
                        <FaHome /> <p>Dashboard</p>
                    </Link>
                    <Link to='/payout' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2' >
                        <FaBlog /><p>Payout</p>
                    </Link>
                    <Link to='/menu' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                        <MdMenuBook /><p>Menu</p>
                    </Link>
                    <Link to='/form' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                        <IoStorefrontOutline /><p>Edit store detail</p>
                    </Link>
                    <Link to='/' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                        <BiSolidOffer /><p>offers & campaign</p>
                    </Link>
                    <Link to='/' className='w-[50%] h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2 mt-60 justify-center rounded-xl ml-16'>
                        <IoIosLogOut /> <p>Log out</p>
                    </Link>
                </div>

                {/* right */}
                <div className='w-[80%]  bg-slate-100  rounded-md flex flex-col items-center  relative ' >
                    <div className='w-full h-[300px] bg-yellow-400 flex flex-col text-white relative'>
                        <button className='bg-black w-[130px]  px-4 py-1 rounded-full mt-6 ml-[850px] '>Need Help?</button>
                        <p className='text-[2.7rem] font-bold mx-auto'>Simple pricing for your business</p>
                        <p className='mx-auto '>Plans that are carefully crafted to suit business.</p>
                       
                        <button className='bg-black w-[60px] absolute mt-36  px-2 py-1 rounded-full  ml-[810px] '>Years</button>
                        <button className='bg-yellow-100  text-black w-[130px]  px-4 py-1 rounded-full  ml-[850px] '>Half-Yearly</button>

                    </div>
                    <div className='w-[70%] h-[250px] bg-white absolute mt-[190px] flex rounded-md shadow-md p-1 '>
                        <div className='w-[250px] bg-yellow-100 flex flex-col justify-center items-center text-black'>
                            <h1 className='font-bold '>Premium PRO</h1>
                            <p className='font-bold text-[2rem]'>$999 <span className='text-[1rem]'>/month</span></p>
                            <p>billed annually</p>
                            <button className='bg-black text-white px-12 py-2 rounded-md mt-4 '>Get Started</button>
                        </div>
                        <div className='flex flex-col p-6 text-[.8rem]'>
                            <p className='mb-3'>Access these features when you get this pricing package for your business.</p>
                            <div className='flex '>
                                <div className='bg-yellow-400 size-4 rounded-full mr-2'></div>
                                <p>Unlock exclusive marketing tools for customer Loyalty</p>
                            </div>
                            <div className='flex mt-3'>
                                <div className='bg-yellow-400 size-4 rounded-full mr-2'></div>
                                <p>Get valuable insights for your business</p>
                            </div>
                            <div className='flex mt-3 '>
                                <div className='bg-yellow-400 size-4 rounded-full mr-2'></div>
                                <p>Zero comission standard payment charges</p>
                            </div>
                            <div className='flex mt-3 '>
                                <div className='bg-yellow-400 size-4 rounded-full mr-2'></div>
                                <p>24/7 support and consulting</p>
                            </div>
                            <div className='flex mt-3 '>
                                <div className='bg-yellow-400 size-4 rounded-full mr-2'></div>
                                <p>Free 500 credits every month for marketing tools</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-1 h-[40px] w-[80%]  mt-[180px]'>
                         <div className='flex items-center'>
                        <img src='/Group.png' alt=''></img>
                        <p className='font-bold ml-2 flex-wrap'>30 days free Trial Guarantee</p>
                         </div>
                         <div className='flex items-center'>
                        <img src='/Vector.png' alt=''></img>
                        <p className='font-bold ml-2 flex-wrap'>No setup fees<br/>
100% hassle-free</p>
                         </div>
                         <div className='flex items-center'>
                        <img src='/Group (1).png' alt=''></img>
                        <p className='font-bold ml-2 flex-wrap'>Easy Yearly subscription
Pay once and for all</p>
                         </div>
                    </div>
                    

                    


                    



                </div>

            </div>
        </div>
  )
}

export default Pricing