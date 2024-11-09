
import Image from 'next/image'
import success from '@/public/assect/elements/success.png'

export default function OrderSuccessPage() {
    return (
        <div className='container 2xl:px-20 px-5 mx-auto py-10 flex flex-col items-center justify-center text-center'>
            <Image src={success} alt='success' className=' sm:w-auto w-32' />
            <h2 className='text-xl text-emerald-500 font-medium sm:mt-10 mt-5 font-sans'>Thank You</h2>
            <h1 className='sm:text-4xl text-2xl  font-medium mt-2 font-sans'>Your Order is Confirmed</h1>
            <p className=' text-gray-600 mt-2'>You will see your order details in you profile.If you face any issue feel free to contact us!</p>
        </div>
    )
}
