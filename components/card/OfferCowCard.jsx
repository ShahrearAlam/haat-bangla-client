"use client"
import { GrLocation } from 'react-icons/gr';
import { IoHeartOutline } from "react-icons/io5";
import Image from 'next/image'
import cow1 from '@/public/assect/cow/cow1.png'
import { useRouter } from 'next/navigation';

export default function OfferCowCard({ data }) {
    const router = useRouter()
    return (
        <div className='px-5 group' onClick={() => router.push(`/cow/${data}`)}>
            <div className='rounded-xl border relative'>
                <Image src={cow1} alt='cow_image' className='p-5 group-hover:bg-[#FFF6EC] w-full max-h-[13.5rem]' />
                <div className="absolute top-2 right-2 z-[10] h-9 w-9 rounded-full bg-white border border-gray-100 cursor-pointer flex items-center justify-center text-xl" >
                    <IoHeartOutline />
                </div>
                <div className='group-hover:flex hidden absolute sm:top-[6rem] top-[5rem] left-0 h-12 w-full bg-black bg-opacity-40  items-center justify-center text-white text-sm z-[10]'>
                    <button>VIEW MORE</button>
                </div>
                <div className='flex bg-[#FF8A00] absolute  top-2 left-0 px-2 py-1.5 items-center justify-center text-white text-sm z-[10]'>
                    SALE 20%
                </div>
            </div>
            <div className='mt-3 flex justify-between mb-4'>
                <div>
                    <h3 className='text-2xl font-semibold mb-2'>শাহিওয়াল</h3>
                    <h3 className='text-xl text-[#686868]'>৩৪৬ কেজি </h3>
                </div>
                <div className='bg-[#FFEFDC] px-4 h-10 text-sm font-medium justify-center rounded-full flex items-center gap-2 text-black'>
                    <GrLocation className='text-[18px]' />
                    <p>চট্রগ্রাম</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>৳২,৭০,০০০</h3>
                <h3 className='text-xl  line-through text-gray-400'> ৳ ৩,২০,০০০</h3>
            </div>
        </div>
    )
}
