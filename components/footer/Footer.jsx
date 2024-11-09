import logo from '@/public/assect/logo/whitLogo.png'
import bg from '@/public/assect/elements/BG.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            <div className="bg-[#1A2327] relative">
                <Image src={bg} alt='footerBg' className=' absolute top-0' />
                <div className="container 2xl:px-20 px-5 py-20 text-white flex md:flex-row flex-col md:justify-between justify-center items-center  z-[10] relative mx-auto">
                    <div className="xl:px-28 text-center md:text-left">
                        <Image src={logo} alt='whiteLogo' className=' w-60 mx-auto md:mx-0' />
                        <p className='xl:w-[50%] sm:w-[60%] text-sm text-[#D9D9D9] my-4 mx-auto md:mx-0'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magn.</p>
                        <div className='flex items-center justify-center md:justify-normal gap-2 mt-3'>
                            <div className='h-9 w-9 rounded-full flex items-center justify-center hover:bg-[#FF8A00] hover:text-white text-[#999999] cursor-pointer'><FaFacebookF /></div>
                            <div className='h-9 w-9 rounded-full flex items-center justify-center hover:bg-[#FF8A00] hover:text-white text-[#999999] cursor-pointer'><FaTwitter /></div>
                            <div className='h-9 w-9 rounded-full flex items-center justify-center hover:bg-[#FF8A00] hover:text-white text-[#999999] cursor-pointer'><FaPinterestP /></div>
                            <div className='h-9 w-9 rounded-full flex items-center justify-center hover:bg-[#FF8A00] hover:text-white text-[#999999] cursor-pointer'><FaInstagram /></div>
                        </div>
                    </div>
                    <div className='flex flex-wrap sm:flex-nowrap lg:gap-20 gap-5 lg:w-[60%] md:w-[80%] w-full justify-between md:justify-normal mt-7 md:mt-0 xl:w-auto'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-md font-medium'>My Account</h2>
                            <div className='h-[2px] w-7 bg-[#FF8A00] rounded-full mb-2 mt-1'></div>
                            <Link className='text-sm text-[#D9D9D9]' href='/'>My Account</Link>
                            <Link className='text-sm text-[#D9D9D9]' href='/'>Wishlist</Link>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-md font-medium'>Help</h2>
                            <div className='h-[2px] w-7 bg-[#FF8A00] rounded-full mb-2 mt-1'></div>
                            <Link className='text-sm text-[#D9D9D9]' href='/'>Contact</Link>
                            <Link className='text-sm text-[#D9D9D9]' href='/'>Faqs</Link>
                            <Link className='text-sm text-[#D9D9D9]' href='/'>Terms & Condition</Link>
                            <Link className='text-sm text-[#D9D9D9]' href='/'>Privacy Policy</Link>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-md font-medium'>Proxy</h2>
                            <div className='h-[2px] w-7 bg-[#FF8A00] rounded-full mb-2 mt-1'></div>
                            <Link className='text-sm text-[#D9D9D9]' href='/'>About</Link>
                            <Link className='text-sm text-[#D9D9D9]' href='/'>Offer Shop</Link>
                            <Link className='text-sm text-[#D9D9D9]' href='/'>All Cattle</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#1A1A1A]'>
                <div className="container 2xl:px-20 px-5 py-3  text-center md:text-left flex justify-between  mx-auto">
                    <p className='text-[#808080] text-sm xl:pl-28'>organito eCommerce © 2023. All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}
