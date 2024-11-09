import ContextCards from '@/components/page/contest/ContextCards'
import React from 'react'

export default function ContestPage() {
    return (
        <div className='container 2xl:px-40 px-5 mx-auto my-10 pb-10 '>
            <div >
                <h1 className='sm:text-3xl text-2xl font-medium '>Contest For You</h1>
                <div className='h-[2px] 2xl:w-[25%] md:w-[35%] sm:w-[55%] w-[70%] bg-black mb-6 rounded-2xl'></div>
            </div>
            <ContextCards />
        </div>
    )
}
