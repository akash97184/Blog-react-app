import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

export const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

  return (
    <div>
        <Header />

        <div className='relative flex justify-center  pb-4 '>
            <div className=' max-w-2xl w-1/2 absolute flex gap-x-4 mt-[5rem]' >
                <button
                className='rounded-md border-2 px-4 py-1'
                onClick={() => navigation(-1)} >
                    back
                </button>

                <h1 className=' mt-2 font-semibold'>
                    Blogs Tagged :- <span className=' text-blue-500 underline'>#{tag}</span>
                </h1>
            </div> 
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default TagPage