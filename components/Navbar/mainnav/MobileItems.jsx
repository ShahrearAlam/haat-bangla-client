import React, { useState } from 'react';
import Link from 'next/link';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { TiArrowRight } from "react-icons/ti";
import hat from '@/public/assect//elements/hat.png';
import Image from 'next/image';
import categoryimg1 from '@/public/assect/categorymenu/categoryCow1.png';
import categoryimg2 from '@/public/assect/categorymenu/categoryCow2.png';
import categoryimg3 from '@/public/assect/categorymenu/categoryCow3.png';
import categoryimg4 from '@/public/assect/categorymenu/categoryCow4.png';
import categoryimg5 from '@/public/assect/categorymenu/categoryCow5.png';

export default function MobileItems() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const hatItems = [
        { id: 1, name: "মিরপুর", img: hat },
        { id: 2, name: "আশুলিয়া", img: hat },
        { id: 3, name: "গাবতলি", img: hat },
        { id: 4, name: "কালশী", img: hat },
        { id: 5, name: "দিয়াবাড়ি", img: hat },
        { id: 6, name: "ভাষানটেক", img: hat },
    ];

    const categoryMenu = [
        { id: 1, name: "গরু", img: categoryimg1 },
        { id: 2, name: "ছাগল", img: categoryimg2 },
        { id: 3, name: "মহিষ", img: categoryimg3 },
        { id: 4, name: "ভেড়া", img: categoryimg4 },
        { id: 5, name: "উট", img: categoryimg5 },
    ];

    const toggleAccordion = (accordionId) => {
        setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
    };

    return (
        <ul className='  overflow-y-auto h-[78vh] overflow-x-hidden'>
            <li>
                <Link href='/'>
                    <p className="text-sm font-semibold text-[#1A2327] group hover:text-[#759F55] transition-all ease-in-out duration-300 py-4 relative z-[5] lg:px-4 px-2 flex items-center gap-2 "><TiArrowRight className='text-xl group-hover:-rotate-45 transition-all ease-in-out duration-300' />Home</p>
                </Link>
            </li>

            <li>
                <div className='flex flex-col group relative'>
                    <div className='flex justify-between items-center ' onClick={() => toggleAccordion('nearestHaat')}>
                        <p className="text-sm font-semibold text-[#1A2327]  hover:text-[#759F55] transition-all ease-in-out duration-300 py-4 relative z-[5] lg:px-4 px-2 flex items-center gap-2 "><TiArrowRight className='text-xl group-hover:-rotate-45 transition-all ease-in-out duration-300' />Nearest Haat</p>
                        <MdOutlineKeyboardArrowDown className={`text-xl ${activeAccordion === 'nearestHaat' ? 'rotate-90 text-[#759F55]' : ''} transition-all ease-in-out duration-300`} />
                    </div>

                    <div className={`w-FULL bg-white shadow-md  z-[10] ${activeAccordion === 'nearestHaat' ? 'block' : 'hidden'}  transition-all ease-in-out duration-300`}>
                        <div className="grid sm:grid-cols-2 gap-5 p-5">
                            {hatItems.map(item => (
                                <div key={item.id} className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded">
                                    <Image src={item.img} alt="category_img" width={50} height={50} />
                                    <p className="font-semibold text-[15px]">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className='flex flex-col group relative'>
                    <div className='flex justify-between items-center ' onClick={() => toggleAccordion('qurbaniCattle')}>
                        <p className="text-sm font-semibold text-[#1A2327]  hover:text-[#759F55] transition-all ease-in-out duration-300 py-4 relative z-[5] lg:px-4 px-2 flex items-center gap-2 "><TiArrowRight className='text-xl group-hover:-rotate-45 transition-all ease-in-out duration-300' />Qurbani Cattle</p>
                        <MdOutlineKeyboardArrowDown className={`text-xl ${activeAccordion === 'qurbaniCattle' ? 'rotate-90 text-[#759F55]' : ''} transition-all ease-in-out duration-300`} />
                    </div>

                    <div className={`w-FULL bg-white shadow-md  z-[10] ${activeAccordion === 'qurbaniCattle' ? 'block' : 'hidden'}  transition-all ease-in-out duration-300`}>
                        <div className="grid sm:grid-cols-2 gap-5 p-5">
                            {categoryMenu.map(item => (
                                <div key={item.id} className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded">
                                    <Image src={item.img} alt="category_img" width={50} height={50} />
                                    <p className="font-semibold text-[15px]">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <Link href='/'>
                    <p className="text-sm font-semibold text-[#1A2327] group hover:text-[#759F55] transition-all ease-in-out duration-300 py-4 relative z-[5] lg:px-4 px-2 flex items-center gap-2 "><TiArrowRight className='text-xl group-hover:-rotate-45 transition-all ease-in-out duration-300' />Offers</p>
                </Link>
            </li>

            <li>
                <Link href='/'>
                    <p className="text-sm font-semibold text-[#1A2327] group hover:text-[#759F55] transition-all ease-in-out duration-300 py-4 relative z-[5] lg:px-4 px-2 flex items-center gap-2 "><TiArrowRight className='text-xl group-hover:-rotate-45 transition-all ease-in-out duration-300' />Contact Us</p>
                </Link>
            </li>
        </ul>
    );
}
