import React from 'react'
import { AiOutlineStock } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";


const DashboardStructure = () => {
    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-8">
                        <div className="card bg-white ps-5 shadow-xl rounded-md">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 md:col-span-5">
                                    <div className="card-body py-5">
                                        <h4 className="card-title mb-4 font-serif text-2xl text-[#544f5a]">Congratulations John! 🎉</h4>
                                        <p className="text-md text-[#89868d]">You have done 72% 😎 more sales today.<br /> Check your new raising badge in your profile.</p>
                                    </div>
                                </div>
                                <div className="col-span-7 md:block hidden relative text-center">
                                    <img src="../../assets/img/illustration-john-2.png" className="absolute scale-75 -right-14 -bottom-5 bg-cover" alt="View Profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-2">
                        <div className="card bg-white ps-5 shadow-xl rounded-md">
                            <div className="card p-3">
                                <div className="card-header pb-3">
                                    <div className=" w-full flex justify-between">
                                        <div className='h-10 w-10 p-0.5 flex flex-grow-0  justify-center rounded-3xl text-white bg-sky-500'>
                                            <AiOutlineStock className='text-4xl' />
                                        </div>
                                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="">
                                            <BsThreeDotsVertical />
                                        </button>
                                    </div>
                                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                            <li>
                                                <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                            </li>
                                            <li>
                                                <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pb-3">
                                    <h6 className="mb-2">Transactions</h6>
                                    <div className="flex flex-wrap mb-2 gap-2 pb-1 ">
                                        <h4 className="mb-0 text-2xl">1.2k</h4>
                                        <small className="text-green-600 mt-1">+38%</small>
                                    </div>
                                    <small className='text-[#89868d]'>Daily Transactions</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-2">
                        <div className="card bg-white ps-5 shadow-xl rounded-md">
                        <div className="card p-3">
                                <div className="card-header pb-3">
                                    <div className=" w-full flex justify-between">
                                        <div className='h-10 w-10 p-0.5 flex flex-grow-0  justify-center rounded-3xl text-white bg-green-500'>
                                            <BiDollar className='text-4xl' />
                                        </div>
                                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="">
                                            <BsThreeDotsVertical />
                                        </button>
                                    </div>
                                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" >
                                            <li>
                                                <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                            </li>
                                            <li>
                                                <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body pt-0 pb-3">
                                    <h6 className="mb-2">Revenue</h6>
                                    <div className="flex flex-wrap mb-2 gap-2 pb-1 ">
                                        <h4 className="mb-0 text-2xl">1.2k</h4>
                                        <small className="text-green-600 mt-1">+38%</small>
                                    </div>
                                    <small className='text-[#89868d]'>Revenue increase</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardStructure