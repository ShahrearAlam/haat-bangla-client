import slotbg from '@/public/assect/slots/slotsbg.png'
import whitelogo from '@/public/assect/logo/whitLogo.png'
import Image from 'next/image'
import PackageCard from '@/components/card/PackageCard'

export default function page() {
    return (
        <div>
            <div className='h-[30rem] bg-green-300 relative'>
                <Image src={slotbg} alt='slotbg' className='h-full w-full' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  2xl:w-[48%] xl:w-[57%] lg:w-[80%] w-full px-5 sm:px-0'>
                    <Image src={whitelogo} alt='whitelogo' className='mx-auto w-60 mb-7' />
                    <h1 className='md:text-[25px] text-lg font-semibold text-white'>HaatBangla তে সেলার হিসেবে রেজিস্ট্রেশন করুন একদম ফ্রি  রেজিস্ট্রেশন করলেই পাচ্ছেন আপনার পশু বিক্রয় এর জন্য ফ্রি ২ টি স্লট</h1>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4 container mx-auto 2xl:px-40 px-5 mb-20 mt-20'>
                {
                    [0, 1, 2].map(data => <PackageCard key={data} />)
                }
            </div>
            <div className='flex items-center justify-center mb-20'>
                <button className='px-3 py-2 bg-[#D9D9D9] border border-[#D9D9D9] hover:bg-transparent text-black rounded-sm font-semibold text-sm'>আরও দেখুন</button>
            </div>
        </div>
    )
}
