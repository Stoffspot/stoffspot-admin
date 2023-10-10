import React from 'react'
import { AiTwotoneGift } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";

const ProductStructure = () => {
    return (
        <div>
            <div className="container">
                <nav className="flex pb-5" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a href="/" className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="/" className="ml-1 text-lg font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Products</a>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="grid grid-cols-12 gap-3 pb-8">
                    <div className="col-span-12 md:col-span-3">
                        <div className="card bg-white ps-5 shadow-xl rounded-md">
                            <div className="card p-3 flex justify-between">
                                <div className="card-body pt-0 pb-1">
                                    <h6 className="mb-2 text-xl font-serif">In-store Sales</h6>
                                    <h4 className="mb-1 text-2xl">$5,345.43</h4>
                                    <div className="flex flex-wrap mb-2 gap-2 pb-1 ">
                                        <h3 className='text-[#89868d]'>5k orders</h3>
                                        <small className="text-green-600 ">+38%</small>
                                    </div>
                                </div>
                                <div className="card-header pb-3">
                                    <div className=" w-full flex justify-between">
                                        <div className='h-10 w-10 p-2 flex flex-grow-0  justify-center rounded-3xl text-white bg-sky-500'>
                                            <AiTwotoneHome className='text-2xl' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-3">
                        <div className="card bg-white ps-5 shadow-xl rounded-md">
                            <div className="card p-3 flex justify-between">
                                <div className="card-body pt-0 pb-1">
                                    <h6 className="mb-2 text-xl font-serif">In-store Sales</h6>
                                    <h4 className="mb-1 text-2xl">$5,345.43</h4>
                                    <div className="flex flex-wrap mb-2 gap-2 pb-1 ">
                                        <h3 className='text-[#89868d]'>5k orders</h3>
                                        <small className="text-green-600 ">+38%</small>
                                    </div>
                                </div>
                                <div className="card-header pb-3">
                                    <div className=" w-full flex justify-between">
                                        <div className='h-10 w-10 p-2 flex flex-grow-0  justify-center rounded-3xl text-white bg-sky-500'>
                                            <AiOutlineLaptop className='text-2xl' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <div className="card bg-white ps-5 shadow-xl rounded-md">
                            <div className="card p-3 flex justify-between">
                                <div className="card-body pt-0 pb-1">
                                    <h6 className="mb-2 text-xl font-serif">In-store Sales</h6>
                                    <h4 className="mb-1 text-2xl">$5,345.43</h4>
                                    <div className="flex flex-wrap mb-2 gap-2 pb-1 ">
                                        <h3 className='text-[#89868d]'>5k orders</h3>
                                        <small className="text-green-600 ">+38%</small>
                                    </div>
                                </div>
                                <div className="card-header pb-3">
                                    <div className=" w-full flex justify-between">
                                        <div className='h-10 w-10 p-2 flex flex-grow-0  justify-center rounded-3xl text-white bg-sky-500'>
                                            <AiTwotoneGift className='text-2xl' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <div className="card bg-white ps-5 shadow-xl rounded-md">
                            <div className="card p-3 flex justify-between">
                                <div className="card-body pt-0 pb-1">
                                    <h6 className="mb-2 text-xl font-serif">In-store Sales</h6>
                                    <h4 className="mb-1 text-2xl">$5,345.43</h4>
                                    <div className="flex flex-wrap mb-2 gap-2 pb-1 ">
                                        <h3 className='text-[#89868d]'>5k orders</h3>
                                        <small className="text-green-600 ">+38%</small>
                                    </div>
                                </div>
                                <div className="card-header pb-3">
                                    <div className=" w-full flex justify-between">
                                        <div className='h-10 w-10 p-2 flex flex-grow-0  justify-center rounded-3xl text-white bg-sky-500'>
                                            <BiDollar className='text-2xl' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-md md:overflow-hidden overflow-scroll">
                    <div className="card-header ps-5 py-2 px-5">
                        <h5 className="card-title text-2xl font-serif">Filter</h5>
                    </div>

                    <table className="w-full">
                        <thead>
                            <tr className='uppercase text-slate-500 text-xs font-normal   bg-slate-100'>
                                <th className="py-2 w-10" data-col="1" aria-label="">
                                    <input type="checkbox" className="form-check-input" />
                                </th>
                                <th className="w-[45vw] flex py-2 align-middle justify-start" >product</th>
                                <th className="w-40">category</th>
                                <th className="w-20">stock</th>
                                <th className="w-20">sku</th>
                                <th className="w-20">qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b-2">
                                <td className="  dt-checkboxes-cell">
                                    <input type="checkbox" className="dt-checkboxes form-check-input w-10" />
                                </td>
                                <td className="sorting_1 w-[45vw]" >
                                    <div className="flex justify-start align-items-center product-name">
                                        <div className="avatar-wrapper me-3">
                                            <div className="avatar rounded-2 bg-label-secondary">
                                                <img src="../../assets/img/ecommerce-images/product-9.png" alt="Product-9" className="rounded-2" />

                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="text-nowrap text-heading fw-medium">Air Jordan</span>
                                            <small className="text-truncate d-none d-sm-block">Air Jordan is a line of basketball shoes produced by Nike</small>
                                        </div>
                                    </div>
                                </td>
                                <td className='w-40 text-center'>
                                    <h6 className="text-truncate d-flex align-items-center mb-0">
                                        <span className="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-info me-2">
                                            <i className="mdi mdi-shoe-sneaker"></i>
                                        </span>Shoes</h6>
                                </td>
                                <td className='w-20 text-center'>
                                    <span className="text-truncate">
                                        <label className="switch switch-primary switch-sm">
                                            <input type="checkbox" className="switch-input" id="switch" />
                                            <span className="switch-toggle-slider">
                                                <span className="switch-off"></span>
                                            </span>
                                        </label>
                                    </span>
                                </td>
                                <td className='w-20 text-center'>
                                    <span>31063</span>
                                </td>
                                <td className='w-20 text-center'>
                                    <span>942</span>
                                </td>
                            </tr>
                            <tr className="border-b-2">
                                <td className="  dt-checkboxes-cell">
                                    <input type="checkbox" className="dt-checkboxes form-check-input w-10" />
                                </td>
                                <td className="sorting_1 w-[45vw]" >
                                    <div className="flex justify-start align-items-center product-name">
                                        <div className="avatar-wrapper me-3">
                                            <div className="avatar rounded-2 bg-label-secondary">
                                                <img src="../../assets/img/ecommerce-images/product-9.png" alt="Product-9" className="rounded-2" />

                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="text-nowrap text-heading fw-medium">Air Jordan</span>
                                            <small className="text-truncate d-none d-sm-block">Air Jordan is a line of basketball shoes produced by Nike</small>
                                        </div>
                                    </div>
                                </td>
                                <td className='w-40 text-center'>
                                    <h6 className="text-truncate d-flex align-items-center mb-0">
                                        <span className="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-info me-2">
                                            <i className="mdi mdi-shoe-sneaker"></i>
                                        </span>Shoes</h6>
                                </td>
                                <td className='w-20 text-center'>
                                    <span className="text-truncate">
                                        <label className="switch switch-primary switch-sm">
                                            <input type="checkbox" className="switch-input" id="switch" />
                                            <span className="switch-toggle-slider">
                                                <span className="switch-off"></span>
                                            </span>
                                        </label>
                                    </span>
                                </td>
                                <td className='w-20 text-center'>
                                    <span>31063</span>
                                </td>
                                <td className='w-20 text-center'>
                                    <span>942</span>
                                </td>
                            </tr>
                            <tr className="border-b-2">
                                <td className="  dt-checkboxes-cell">
                                    <input type="checkbox" className="dt-checkboxes form-check-input w-10" />
                                </td>
                                <td className="sorting_1 w-[45vw]" >
                                    <div className="flex justify-start align-items-center product-name">
                                        <div className="avatar-wrapper me-3">
                                            <div className="avatar rounded-2 bg-label-secondary">
                                                <img src="../../assets/img/ecommerce-images/product-9.png" alt="Product-9" className="rounded-2" />

                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="text-nowrap text-heading fw-medium">Air Jordan</span>
                                            <small className="text-truncate d-none d-sm-block">Air Jordan is a line of basketball shoes produced by Nike</small>
                                        </div>
                                    </div>
                                </td>
                                <td className='w-40 text-center'>
                                    <h6 className="text-truncate d-flex align-items-center mb-0">
                                        <span className="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-info me-2">
                                            <i className="mdi mdi-shoe-sneaker"></i>
                                        </span>Shoes</h6>
                                </td>
                                <td className='w-20 text-center'>
                                    <span className="text-truncate">
                                        <label className="switch switch-primary switch-sm">
                                            <input type="checkbox" className="switch-input" id="switch" />
                                            <span className="switch-toggle-slider">
                                                <span className="switch-off"></span>
                                            </span>
                                        </label>
                                    </span>
                                </td>
                                <td className='w-20 text-center'>
                                    <span>31063</span>
                                </td>
                                <td className='w-20 text-center'>
                                    <span>942</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductStructure