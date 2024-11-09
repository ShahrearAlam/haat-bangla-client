import OrderTable from '@/components/page/order/OrderTable'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

export default function OrderHistoryPage() {
    return (
        <div className='container px-5 2xl:px-20 mx-auto py-10'>
            <h2 className='font-medium flex items-center gap-2'><IoCartOutline className='text-emerald-500 text-2xl' />Your Order History</h2>
            <OrderTable />
        </div>
    )
}
