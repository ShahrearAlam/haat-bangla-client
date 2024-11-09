"use client"
import { useState } from "react"
import ModalLayout from "./ModalLayout"
import { RxCross1 } from "react-icons/rx"
import { IoIosArrowDown } from "react-icons/io"


export default function UserInfoModal() {
    const [openModal, setOpenModal] = useState(true)
    const [selectTab, setSelectTab] = useState(1)

    const tabData = [{ id: 1, title: 'আপনি কি কুরবানির পশু ক্রয় করতে চান?' }]


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);


    const [selectedValue, setSelectedValue] = useState("বিভাগ সিলেক্ট করুন")
    const [selectedValue2, setSelectedValue2] = useState("জেলা সিলেক্ট করুন")
    const [selectedValue3, setSelectedValue3] = useState("হাট সিলেক্ট করুন")
    const [selectedValue4, setSelectedValue4] = useState("পশু সিলেক্ট করুন")
    const [selectedValue5, setSelectedValue5] = useState("ওজন সিলেক্ট করুন")
    const [selectedValue6, setSelectedValue6] = useState("দাম সিলেক্ট করুন")



    // array of options 
    const options = ['ঢাকা', 'চট্রগ্রাম', 'রাজশাহী', 'খুলনা', 'ঢাকা', 'চট্রগ্রাম', 'রাজশাহী', 'খুলনা', 'ঢাকা', 'চট্রগ্রাম', 'রাজশাহী', 'খুলনা'];
    const options2 = ['ঢাকা', 'টাঙ্গাইল', 'নারায়নগঞ্জ', 'গাজীপুর'];
    const options3 = ['গাবতলি', 'মিরপুর', 'মহাম্মদপুর', 'বাড্ডা'];
    const options4 = ['গরু', 'ভেড়া', 'ছাগল', 'উট', 'মহিষ'];
    const options5 = ['৩০০ কেজি এর নিচে', '৪০০ কেজি এর নিচে', '৫০০ কেজি এর নিচে', '৬০০ কেজি এর নিচে'];
    const options6 = ['৬০০০০ এর নিচে', '১০০০০০ এর নিচে', '২০০০০০ এর নিচে', '৩০০০০০ এর নিচে', '৪০০০০০ এর নিচে'];




    return (
        <ModalLayout openModal={openModal} setOpenModal={setOpenModal} >

            <div>
                <div className="flex items-center justify-between bg-[#063449] text-white p-5 rounded-t-2xl">
                    <h2 className="text-xl font-medium">আপনার কুরবানির পশু সহজে খুজে পেতে নিচের ফর্ম টি পুরন করুন </h2>
                    <RxCross1 onClick={() => setOpenModal(false)} className="  text-xl cursor-pointer hover:text-red-500" />
                </div>

                <div className="bg-[#0096D9] bg-opacity-30 backdrop-blur-3xl p-5 rounded-b-2xl">
                    <div className="flex items-center gap-5">
                        {
                            tabData?.map(tab => <div key={tab?.id} onClick={() => setSelectTab(tab?.id)} className={`py-3 px-4 rounded-md w-full font-semibold text-[15px] ${selectTab === tab?.id ? "bg-white text-black" : "bg-[#1282B5] text-white"}`}>{tab?.title}</div>)
                        }
                    </div>


                    {
                        selectTab === 1 ?
                            <div>
                                <h2 className="mb-3 mt-7 text-white">আপনি কোন অঞ্চল থেকে ক্রয়/বিক্রয় করতে চান ?</h2>

                                <form >
                                    <div className="pt-3 pb-5">

                                        <div className={`flex items-center gap-3 transition-all duration-200 ease-in-out  ${isOpen || isOpen2 || isOpen3 ? 'pb-44' : ''}`}>
                                            <div className="w-full relative">
                                                <h2 className="text-sm text-white mb-2">বিভাগ বাছাই করুন</h2>
                                                <div onClick={() => setIsOpen(!isOpen)} className={`flex z-[12] relative items-center justify-between rounded cursor-pointer  bg-[#053D57] text-white px-6 py-2 border ${isOpen && "rounded-b-none"} `}>
                                                    <h1 className="font-medium text-white">{selectedValue}</h1>
                                                    <IoIosArrowDown className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300 text-xl`} />
                                                </div>
                                                <div className={`${isOpen ? 'visible top-[55px] opacity-100 z-[10]  ' : 'invisible top-6 opacity-0 '} max-h-44 overflow-x-auto noScrollBar absolute left-0 w-full rounded bg-[#053D57] text-white rounded-t-none pt-3  border border-t-0 duration-300`}>
                                                    {options?.map((option, idx) => (
                                                        <div key={idx} onClick={(e) => { setSelectedValue(e.target.textContent); setIsOpen(false); }} className="px-6 py-2 text-white hover:bg-[#1a3743] cursor-pointer border-t ">
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="w-full relative">
                                                <h2 className="text-sm text-white mb-2">জেলা বাছাই করুন</h2>
                                                <div onClick={() => setIsOpen2(!isOpen2)} className={`flex z-[12] relative items-center justify-between rounded cursor-pointer  bg-[#053D57] text-white px-6 py-2 border ${isOpen2 && "rounded-b-none"} `}>
                                                    <h1 className="font-medium text-white">{selectedValue2}</h1>
                                                    <IoIosArrowDown className={`${isOpen2 ? '-rotate-180' : 'rotate-0'} duration-300 text-xl`} />
                                                </div>
                                                <div className={`${isOpen2 ? 'visible top-[55px] opacity-100 z-[10]  ' : 'invisible top-6 opacity-0 '} max-h-44 overflow-x-auto noScrollBar absolute left-0 w-full rounded bg-[#053D57] text-white rounded-t-none pt-3  border border-t-0 duration-300`}>
                                                    {options2?.map((option, idx) => (
                                                        <div key={idx} onClick={(e) => { setSelectedValue2(e.target.textContent); setIsOpen2(false); }} className="px-6 py-2 text-white hover:bg-[#1a3743] cursor-pointer border-t ">
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="w-full relative">
                                                <h2 className="text-sm text-white mb-2">হাট বাছাই করুন</h2>
                                                <div onClick={() => setIsOpen3(!isOpen3)} className={`flex z-[12] relative items-center justify-between rounded cursor-pointer  bg-[#053D57] text-white px-6 py-2 border ${isOpen3 && "rounded-b-none"} `}>
                                                    <h1 className="font-medium text-white">{selectedValue3}</h1>
                                                    <IoIosArrowDown className={`${isOpen3 ? '-rotate-180' : 'rotate-0'} duration-300 text-xl`} />
                                                </div>
                                                <div className={`${isOpen3 ? 'visible top-[55px] opacity-100 z-[10] ' : 'invisible top-6 opacity-0 '} max-h-44 overflow-x-auto noScrollBar absolute left-0 w-full rounded bg-[#053D57] text-white rounded-t-none pt-3  border border-t-0 duration-300`}>
                                                    {options3?.map((option, idx) => (
                                                        <div key={idx} onClick={(e) => { setSelectedValue3(e.target.textContent); setIsOpen3(false); }} className="px-6 py-2 text-white hover:bg-[#1a3743] cursor-pointer border-t ">
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`flex items-center gap-3 transition-all duration-200 ease-in-out mt-7  ${isOpen4 || isOpen5 || isOpen6 ? 'pb-44' : ''}`}>
                                            <div className="w-full relative">
                                                <h2 className="text-sm text-white mb-2">পশু বাছাই করুন</h2>
                                                <div onClick={() => setIsOpen4(!isOpen4)} className={`flex z-[12] relative items-center justify-between rounded cursor-pointer  bg-[#053D57] text-white px-6 py-2 border ${isOpen4 && "rounded-b-none"} `}>
                                                    <h1 className="font-medium text-white">{selectedValue4}</h1>
                                                    <IoIosArrowDown className={`${isOpen4 ? '-rotate-180' : 'rotate-0'} duration-300 text-xl`} />
                                                </div>
                                                <div className={`${isOpen4 ? 'visible top-[55px] opacity-100 z-[10]  ' : 'invisible top-6 opacity-0 '} max-h-44 overflow-x-auto noScrollBar absolute left-0 w-full rounded bg-[#053D57] text-white rounded-t-none pt-3  border border-t-0 duration-300`}>
                                                    {options4?.map((option, idx) => (
                                                        <div key={idx} onClick={(e) => { setSelectedValue4(e.target.textContent); setIsOpen4(false); }} className="px-6 py-2 text-white hover:bg-[#1a3743] cursor-pointer border-t ">
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="w-full relative">
                                                <h2 className="text-sm text-white mb-2">ওজন নির্ধারণ করুন</h2>
                                                <div onClick={() => setIsOpen5(!isOpen5)} className={`flex z-[12] relative items-center justify-between rounded cursor-pointer  bg-[#053D57] text-white px-6 py-2 border ${isOpen5 && "rounded-b-none"} `}>
                                                    <h1 className="font-medium text-white">{selectedValue5}</h1>
                                                    <IoIosArrowDown className={`${isOpen5 ? '-rotate-180' : 'rotate-0'} duration-300 text-xl`} />
                                                </div>
                                                <div className={`${isOpen5 ? 'visible top-[55px] opacity-100 z-[10]  ' : 'invisible top-6 opacity-0 '} max-h-44 overflow-x-auto noScrollBar absolute left-0 w-full rounded bg-[#053D57] text-white rounded-t-none pt-3  border border-t-0 duration-300`}>
                                                    {options5?.map((option, idx) => (
                                                        <div key={idx} onClick={(e) => { setSelectedValue5(e.target.textContent); setIsOpen5(false); }} className="px-6 py-2 text-white hover:bg-[#1a3743] cursor-pointer border-t ">
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="w-full relative">
                                                <h2 className="text-sm text-white mb-2">দাম নির্ধারণ করুন</h2>
                                                <div onClick={() => setIsOpen6(!isOpen6)} className={`flex z-[12] relative items-center justify-between rounded cursor-pointer  bg-[#053D57] text-white px-6 py-2 border ${isOpen6 && "rounded-b-none"} `}>
                                                    <h1 className="font-medium text-white">{selectedValue6}</h1>
                                                    <IoIosArrowDown className={`${isOpen6 ? '-rotate-180' : 'rotate-0'} duration-300 text-xl`} />
                                                </div>
                                                <div className={`${isOpen6 ? 'visible top-[55px] opacity-100 z-[10] ' : 'invisible top-6 opacity-0 '} max-h-44 overflow-x-auto noScrollBar absolute left-0 w-full rounded bg-[#053D57] text-white rounded-t-none pt-3  border border-t-0 duration-300`}>
                                                    {options6?.map((option, idx) => (
                                                        <div key={idx} onClick={(e) => { setSelectedValue6(e.target.textContent); setIsOpen6(false); }} className="px-6 py-2 text-white hover:bg-[#1a3743] cursor-pointer border-t ">
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>


                                        <div className={`flex items-end gap-3  mt-7  `}>
                                            <div className="w-full">
                                                <h2 className="text-sm text-white mb-2">আপনার নাম দিন</h2>
                                                <input type="text" className="  bg-[#053D57] text-white px-2 py-2 border focus:outline-none rounded" />
                                            </div>
                                            <div className="w-full">
                                                <h2 className="text-sm text-white mb-2">মোবাইল নাম্বার দিন</h2>
                                                <input type="number" className="  bg-[#053D57] text-white px-2 py-2 border focus:outline-none rounded" />
                                            </div>
                                            <div className="w-full">
                                                <button className=" py-2.5 bg-white text-black rounded mb-0.5 w-full font-semibold text-sm">সাবমিট করুন</button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div> : <div>
                                <h2 className="mb-3 mt-7 text-white">আপনি কোন অঞ্চল থেকে ক্রয়/বিক্রয় করতে চান ?</h2>

                                <form >
                                    <div className="pt-3 pb-5">

                                        <div className={`flex items-center gap-3 transition-all duration-200 ease-in-out  ${isOpen || isOpen2 || isOpen3 ? 'pb-44' : ''}`}>
                                            <div className="w-full relative">
                                                <h2 className="text-sm text-white mb-2">বিভাগ বাছাই করুন</h2>
                                                <div onClick={() => setIsOpen(!isOpen)} className={`flex z-[12] relative items-center justify-between rounded cursor-pointer  bg-[#053D57] text-white px-6 py-2 border ${isOpen && "rounded-b-none"} `}>
                                                    <h1 className="font-medium text-white">{selectedValue}</h1>
                                                    <IoIosArrowDown className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300 text-xl`} />
                                                </div>
                                                <div className={`${isOpen ? 'visible top-[55px] opacity-100 z-[10]  ' : 'invisible top-6 opacity-0 '} max-h-44 overflow-x-auto noScrollBar absolute left-0 w-full rounded bg-[#053D57] text-white rounded-t-none pt-3  border border-t-0 duration-300`}>
                                                    {options?.map((option, idx) => (
                                                        <div key={idx} onClick={(e) => { setSelectedValue(e.target.textContent); setIsOpen(false); }} className="px-6 py-2 text-white hover:bg-[#1a3743] cursor-pointer border-t ">
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="w-full relative">
                                                <h2 className="text-sm text-white mb-2">জেলা বাছাই করুন</h2>
                                                <div onClick={() => setIsOpen2(!isOpen2)} className={`flex z-[12] relative items-center justify-between rounded cursor-pointer  bg-[#053D57] text-white px-6 py-2 border ${isOpen2 && "rounded-b-none"} `}>
                                                    <h1 className="font-medium text-white">{selectedValue2}</h1>
                                                    <IoIosArrowDown className={`${isOpen2 ? '-rotate-180' : 'rotate-0'} duration-300 text-xl`} />
                                                </div>
                                                <div className={`${isOpen2 ? 'visible top-[55px] opacity-100 z-[10]  ' : 'invisible top-6 opacity-0 '} max-h-44 overflow-x-auto noScrollBar absolute left-0 w-full rounded bg-[#053D57] text-white rounded-t-none pt-3  border border-t-0 duration-300`}>
                                                    {options2?.map((option, idx) => (
                                                        <div key={idx} onClick={(e) => { setSelectedValue2(e.target.textContent); setIsOpen2(false); }} className="px-6 py-2 text-white hover:bg-[#1a3743] cursor-pointer border-t ">
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="w-full relative">
                                                <h2 className="text-sm text-white mb-2">হাট বাছাই করুন</h2>
                                                <div onClick={() => setIsOpen3(!isOpen3)} className={`flex z-[12] relative items-center justify-between rounded cursor-pointer  bg-[#053D57] text-white px-6 py-2 border ${isOpen3 && "rounded-b-none"} `}>
                                                    <h1 className="font-medium text-white">{selectedValue3}</h1>
                                                    <IoIosArrowDown className={`${isOpen3 ? '-rotate-180' : 'rotate-0'} duration-300 text-xl`} />
                                                </div>
                                                <div className={`${isOpen3 ? 'visible top-[55px] opacity-100 z-[10] ' : 'invisible top-6 opacity-0 '} max-h-44 overflow-x-auto noScrollBar absolute left-0 w-full rounded bg-[#053D57] text-white rounded-t-none pt-3  border border-t-0 duration-300`}>
                                                    {options3?.map((option, idx) => (
                                                        <div key={idx} onClick={(e) => { setSelectedValue3(e.target.textContent); setIsOpen3(false); }} className="px-6 py-2 text-white hover:bg-[#1a3743] cursor-pointer border-t ">
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`flex items-center gap-3 transition-all duration-200 ease-in-out mt-7  ${isOpen4 || isOpen5 || isOpen6 ? 'pb-44' : ''}`}>
                                            <div className="w-full relative">
                                                <h2 className="text-sm text-white mb-2">পশু বাছাই করুন</h2>
                                                <div onClick={() => setIsOpen4(!isOpen4)} className={`flex z-[12] relative items-center justify-between rounded cursor-pointer  bg-[#053D57] text-white px-6 py-2 border ${isOpen4 && "rounded-b-none"} `}>
                                                    <h1 className="font-medium text-white">{selectedValue4}</h1>
                                                    <IoIosArrowDown className={`${isOpen4 ? '-rotate-180' : 'rotate-0'} duration-300 text-xl`} />
                                                </div>
                                                <div className={`${isOpen4 ? 'visible top-[55px] opacity-100 z-[10]  ' : 'invisible top-6 opacity-0 '} max-h-44 overflow-x-auto noScrollBar absolute left-0 w-full rounded bg-[#053D57] text-white rounded-t-none pt-3  border border-t-0 duration-300`}>
                                                    {options4?.map((option, idx) => (
                                                        <div key={idx} onClick={(e) => { setSelectedValue4(e.target.textContent); setIsOpen4(false); }} className="px-6 py-2 text-white hover:bg-[#1a3743] cursor-pointer border-t ">
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="w-full relative">
                                                <h2 className="text-sm text-white mb-2">ওজন নির্ধারণ করুন</h2>
                                                <div onClick={() => setIsOpen5(!isOpen5)} className={`flex z-[12] relative items-center justify-between rounded cursor-pointer  bg-[#053D57] text-white px-6 py-2 border ${isOpen5 && "rounded-b-none"} `}>
                                                    <h1 className="font-medium text-white">{selectedValue5}</h1>
                                                    <IoIosArrowDown className={`${isOpen5 ? '-rotate-180' : 'rotate-0'} duration-300 text-xl`} />
                                                </div>
                                                <div className={`${isOpen5 ? 'visible top-[55px] opacity-100 z-[10]  ' : 'invisible top-6 opacity-0 '} max-h-44 overflow-x-auto noScrollBar absolute left-0 w-full rounded bg-[#053D57] text-white rounded-t-none pt-3  border border-t-0 duration-300`}>
                                                    {options5?.map((option, idx) => (
                                                        <div key={idx} onClick={(e) => { setSelectedValue5(e.target.textContent); setIsOpen5(false); }} className="px-6 py-2 text-white hover:bg-[#1a3743] cursor-pointer border-t ">
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="w-full relative">
                                                <h2 className="text-sm text-white mb-2">দাম নির্ধারণ করুন</h2>
                                                <div onClick={() => setIsOpen6(!isOpen6)} className={`flex z-[12] relative items-center justify-between rounded cursor-pointer  bg-[#053D57] text-white px-6 py-2 border ${isOpen6 && "rounded-b-none"} `}>
                                                    <h1 className="font-medium text-white">{selectedValue6}</h1>
                                                    <IoIosArrowDown className={`${isOpen6 ? '-rotate-180' : 'rotate-0'} duration-300 text-xl`} />
                                                </div>
                                                <div className={`${isOpen6 ? 'visible top-[55px] opacity-100 z-[10] ' : 'invisible top-6 opacity-0 '} max-h-44 overflow-x-auto noScrollBar absolute left-0 w-full rounded bg-[#053D57] text-white rounded-t-none pt-3  border border-t-0 duration-300`}>
                                                    {options6?.map((option, idx) => (
                                                        <div key={idx} onClick={(e) => { setSelectedValue6(e.target.textContent); setIsOpen6(false); }} className="px-6 py-2 text-white hover:bg-[#1a3743] cursor-pointer border-t ">
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>


                                        <div className={`flex items-end gap-3  mt-7  `}>
                                            <div className="w-full">
                                                <h2 className="text-sm text-white mb-2">আপনার নাম দিন</h2>
                                                <input type="text" className="  bg-[#053D57] text-white px-2 py-2 border focus:outline-none rounded" />
                                            </div>
                                            <div className="w-full">
                                                <h2 className="text-sm text-white mb-2">মোবাইল নাম্বার দিন</h2>
                                                <input type="number" className="  bg-[#053D57] text-white px-2 py-2 border focus:outline-none rounded" />
                                            </div>
                                            <div className="w-full">
                                                <button className=" py-2.5 bg-white text-black rounded mb-0.5 w-full font-semibold text-sm">সাবমিট করুন</button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                    }





                </div>


            </div>

        </ModalLayout>
    )
}
