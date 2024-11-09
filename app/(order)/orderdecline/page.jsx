import Image from "next/image";
import dclineImg from '@/public/assect/elements/decline.png'
export default function orderDeclinePageage() {
    return (
        <div className='container 2xl:px-20 px-5 mx-auto py-10 flex flex-col items-center justify-center text-center'>
            <Image src={dclineImg} alt='success' className=' sm:w-auto w-32' />
            <h2 className='text-xl text-emerald-500 font-medium sm:mt-10 mt-5 font-sans'>Sorry!</h2>
            <h1 className='sm:text-4xl text-2xl  font-medium mt-2 font-sans'>Your Order is not Completed.</h1>
            <p className=' text-gray-600 mt-2'>There is some issue to complete your order. Try again or contact us.</p>
        </div>
    )
}
