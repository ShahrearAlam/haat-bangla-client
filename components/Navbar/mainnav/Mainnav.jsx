'use client'
import Logo from "@/components/ui/Logo";
import MenuItems from "./MenuItems";
import NavElements from "./NavElements";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Mainnav() {

    const route = useRouter()
    const [open, setopen] = useState(false)
    const { user } = useSelector(state => state.auth);

    return (
        <div className="container mx-auto 2xl:px-20 px-5 flex items-center justify-between h-full py-2 lg:py-0 relative">
            <Logo />
            <div className="flex items-center xl:gap-7 gap-5 ">
                <MenuItems />
                {user?.role !== 'seller' && <button onClick={() => route.push('/login')} className="py-2 px-4 bg-[#044884] border border-[#044884] hover:text-[#044884] rounded-full text-white font-medium text-xs hover:bg-transparent sm:block hidden">Become a Seller</button>}
                <NavElements setopen={setopen} />
            </div>

            <MobileMenu open={open} setopen={setopen} />

        </div>
    )
}
