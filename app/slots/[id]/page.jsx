import packagebg from '@/public/assect/slots/packageBg.png'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import { GoPlus } from "react-icons/go";
import bkash from '@/public/assect/elements/bkash.png'
import PackageCard from '@/components/card/PackageCard';

export default function page() {
    const packeFature = ['৩ টি স্লট উন্মুক্ত হবে।', 'প্যাকেজ মেয়াদ-৭ দিন', 'অতিরিক্ত প্রতি স্লট এর মূল্য -৫  টাকা', 'অতিরিক্ত প্রতি স্লট এর মূল্য -৫  টাকা']
    return (
        <div>
            <div className='container 2xl:px-20 px-5 mx-auto py-20 md:flex gap-16'>
                <Image src={packagebg} alt='packagebg' className='border md:w-1/2 h-fit' />

                <div className=' md:w-1/2 mt-10 md:mt-0'>
                    <h3 className='xl:text-4xl text-2xl font-semibold text-[#044884] mb-5'>স্লট প্যাকেজ ১- সহজ</h3>
                    {
                        packeFature?.map((p, index) => <div key={index} className='flex items-center gap-2 xl:text-xl text-md mt-5'>
                            <FaCheckCircle className='xl:text-2xl text-xl text-[#31AF91]' /> {p}
                        </div>)
                    }
                    <div className='my-8 flex items-center gap-3'>
                        {
                            [0, 1, 2, 3, 4].map(data => <div key={data} className='xl:h-16 xl:w-16 h-14 w-14 shadow rounded border flex  items-center justify-center text-2xl'>
                                <GoPlus />
                            </div>)
                        }
                    </div>
                    <div className='flex items-center justify-between pr-28 mt-5'>
                        <p className='xl:text-xl text-base font-semibold'>প্যাকেজ মূল্য </p>
                        <p className='xl:text-6xl text-4xl font-bold text-black'>৳ ২০</p>
                    </div>
                    <div>
                        <p className='xl:text-xl text-base font-semibold xl:mt-10 mt-5'> প্যাকেজ কিনতে পেমেন্ট করুন</p>
                        <button className=' rounded-md bg-[#E3106E] xl:mt-7 mt-5'><Image src={bkash} alt='bkash' className='px-10 py-2 xl:w-80 w-60' /></button>
                    </div>
                </div>
            </div>

            <div className='container 2xl:px-20 px-5 mx-auto'>
                <h3 className='text-xl font-medium'>অন্যান্য স্লট প্যাকেজ </h3>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 5 mb-20 mt-10'>
                    {
                        [0, 1, 2, 4].map(data => <PackageCard key={data} />)
                    }
                </div>
            </div>
        </div>
    )
}
