import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {

  const [togglenav1, settogglenav1] = useState(false)
  const [togglenav2, settogglenav2] = useState(false)
  const [togglenav3, settogglenav3] = useState(false)

  function handleclicknav1() {
    if (togglenav1) {
      settogglenav1(false)
    } else {
      settogglenav2(false)
      settogglenav3(false)
      settogglenav1(true)
    }
  }
  function handleclicknav2() {
    if (togglenav2) {
      settogglenav2(false)
    } else {
      settogglenav3(false)
      settogglenav2(true)
      settogglenav1(false)
    }
  }
  function handleclicknav3() {
    if (togglenav3) {
      settogglenav3(false)
    } else {
      settogglenav2(false)
      settogglenav1(false)
      settogglenav3(true)
    }
  }
  return (
    <div className='w-full'>
      <div className="md:p-5 p-2  flex justify-between my-2 md:my-5  rounded-r-3xl bg-gradient-to-tr text-[#544f5a] from-transparent to-transparent">
        <div className="flex-grow">
          <h2 className="text-2xl text-center md:text-start font-bold uppercase">StoffSpot</h2>
        </div>
      </div>
      <div className='flex md:block flex-wrap justify-evenly'>
        <div className="md:p-3 p-1  flex justify-between  mt-3  rounded-r-3xl bg-gradient-to-tr text-[#544f5a] from-transparent to-transparent hover:text-white hover:from-[#9055fdda] hover:to-[#c4a5fe]">
          <div className="flex-grow">
            <Link to="/">
              <h2 className="text-md">Dashboard</h2>
            </Link>
          </div>
        </div>
        <div>
          <div onClick={handleclicknav1} className=' md:p-3 p-1  mt-3 flex justify-between rounded-r-3xl bg-gradient-to-tr text-[#544f5a] from-transparent to-transparent hover:text-white hover:from-[#9055fdda] hover:to-[#c4a5fe]'>
            <div className="flex-grow">
              <h2 className="text-md">Products</h2>
            </div>
            <div className="flex  flex-none justify-center align-middle flex-col">
              <svg className="w-3 h-3  mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
            </div>
          </div>
          <div className='px-5'>
            <div id="dropdownNavbar" class={`z-10 ${togglenav1 ? "block" : "hidden"} md:relative absolute bg-white md:bg-transparent font-normal rounded-lg  w-auto `}>
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <Link to="/product" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Products</Link>
                </li>
                <li>
                  <Link to="/addproduct" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add Products</Link>
                </li>
                <li>
                  <Link to="/category" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Category List</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div onClick={handleclicknav2} className="md:p-3 p-1  mt-3 flex justify-between rounded-r-3xl bg-gradient-to-tr text-[#544f5a] from-transparent to-transparent hover:text-white hover:from-[#9055fdda] hover:to-[#c4a5fe]">
            <div className="flex-grow">
              <h2 className="text-md">Orders</h2>
            </div>
            <div className="flex flex-none justify-center align-middle flex-col">
              <svg className="w-3 h-3  mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
            </div>
          </div>
          <div className='px-5'>
            <div id="dropdownNavbar" class={`z-10 md:relative absolute ${togglenav2 ? "block" : "hidden"} bg-white md:bg-transparent font-normal rounded-lg  w-auto `}>
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <Link to="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Order List</Link>
                </li>
                <li>
                  <Link to="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Order Details</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div onClick={handleclicknav3} className="md:p-3 p-1  mt-3 flex justify-between rounded-r-3xl bg-gradient-to-tr text-[#544f5a] from-transparent to-transparent hover:text-white hover:from-[#9055fdda] hover:to-[#c4a5fe]">
            <div className="flex-grow">
              <h2 className="text-md">Customers</h2>
            </div>
            <div className="flex  flex-none justify-center align-middle flex-col">
              <svg className="w-3 h-3  mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
            </div>
          </div>
          <div className='px-5'>
            <div id="dropdownNavbar" class={`z-10 md:relative absolute ${togglenav3 ? "block" : "hidden"} bg-white md:bg-transparent font-normal rounded-lg  w-auto `}>
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <Link to="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All User</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:p-3 p-1  mt-3 flex justify-between rounded-r-3xl bg-gradient-to-tr text-[#544f5a] from-transparent to-transparent hover:text-white hover:from-[#9055fdda] hover:to-[#c4a5fe]">
          <div className="flex-grow">
            <h2 className="text-md">Reviews</h2>
          </div>
        </div>
        <div className="md:p-3 p-1  mt-3 flex justify-between rounded-r-3xl bg-gradient-to-tr text-[#544f5a] from-transparent to-transparent hover:text-white hover:from-[#9055fdda] hover:to-[#c4a5fe]">
          <div className="flex-grow">
            <h2 className="text-md">Profile</h2>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Sidenav