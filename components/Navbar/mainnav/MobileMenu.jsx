'use client'
import Logo from "@/components/ui/Logo";
import MobileItems from "./MobileItems";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";


export default function MobileMenu({ open, setopen }) {

    const route = useRouter()
    const { user } = useSelector(state => state.auth);

    return (
        <>
            <div onClick={() => setopen(false)} className={`fixed top-0 left-0 bg-black bg-opacity-30 lg:hidden w-screen h-screen transition-all duration-200 ease-in-out ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>
            <div onClick={(e) => e.stopPropagation()} className={`fixed top-0 sm:w-1/2 w-3/4 h-screen lg:hidden bg-white p-5 transition-all duration-200 ease-in-out  ${open ? 'visible left-0' : 'invisible -left-[50%]'}`}>
                <div className="flex  justify-center border-b pb-6">
                    <Logo />
                </div>
                <div>
                    <MobileItems />
                </div>
                {user?.role !== 'seller' && <button onClick={() => route.push('/login')} className="py-2  px-4 bg-[#044884] border border-[#044884] hover:text-[#044884] rounded-full text-white text-sm hover:bg-transparent lg:hidden ">Become a Seller</button>}
            </div>
        </>
    )
}
