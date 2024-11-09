"use client"
import packagebg from '@/public/assect/slots/packageBg.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa'

export default function PackageCard({ data }) {

    const router = useRouter();
    const { _id, name, price, features } = data || {};

    return (
        <div className="bg-white rounded-lg shadow-sm border">
            <Image src={packagebg} alt='package bg' />
            <div className='p-5'>
                <h3 onClick={() => router.push(`/package/${_id}`)} className='text-2xl font-semibold text-[#044884] mb-5 hover:text-gray-500 cursor-pointer'>{name}</h3>
                {
                    features?.map((p, index) => <div key={index} className='flex items-center gap-2 text-[15px] mt-2.5'>
                        <FaCheckCircle className='text-xl text-[#31AF91]' /> {p}
                    </div>)
                }
                <div className='flex items-center justify-between mt-5'>
                    <p className='text-lg font-medium'>প্যাকেজ মূল্য </p>
                    <p className='text-4xl font-bold text-black'>৳ {price}</p>
                </div>
            </div>
        </div>
    )
}