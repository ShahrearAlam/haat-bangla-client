'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"



export default function BreadCrump() {
    const router = useRouter()
    return (
        <div className="flex items-center gap-12 container 2xl:px-20 px-5 mx-auto mt-3 font-medium">
            <button onClick={() => router.back()} className="hover:text-gray-600">Back</button>

            <div className="flex items-center gap-1">
                <Link href={'/'} className="hover:text-gray-600">Home</Link>/
                <p className="text-gray-600">Cow</p>/
                <p className="text-gray-600">shahiwal</p>
            </div>
        </div>
    )
}
