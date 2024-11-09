import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { HiUser } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { TbUserCog, TbUserMinus } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth/authSlice";
import { PiShoppingCart } from "react-icons/pi";

export default function NavElements({ setopen }) {

    const router = useRouter();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)

    console.log(user?.role)
    const handleLogOut = () => {
        dispatch(logout());
        router.push("/userGoogleSignUp");
    }

    return (
        <div>
            <div className="flex items-center gap-1 text-xl text-gray-700 ">

                <Link href={'/saveproducts'} >
                    <div className="relative cursor-pointer">
                        <FaRegHeart />
                    </div>
                </Link>

                <div className="h-5 w-[1px] bg-[#CCCCCC] mx-4"></div>
                {user ? <div className="relative group">
                    <div className="flex items-center gap-2  py-1">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-2xl text-gray-500">
                            <HiUser />
                        </div>
                        <span className="text-sm font-bold">{user.fullName}</span>
                        <IoIosArrowDown className="text-lg" />
                    </div>

                    <div className="h-auto w-full min-w-36 right-0 bg-red-100 absolute top-10 hidden group-hover:flex flex-col ">
                        <Link href={user?.role === 'user' ? '/userprofile' : '/sellerprofile'} className="text-sm font-medium hover:text-gray-600 bg-white p-2 hover:bg-gray-200 flex items-center gap-2 "><TbUserCog />View Profile</Link>
                        {
                            user?.role !== 'user' && <Link href={'/orderhistory'} className="text-sm font-medium hover:text-gray-600 bg-white p-2 hover:bg-gray-200 flex items-center gap-2 "><PiShoppingCart />Order History</Link>
                        }
                        <button onClick={handleLogOut} className="text-sm font-medium hover:text-gray-600 bg-white p-2 text-left hover:bg-gray-200 flex items-center gap-2"><TbUserMinus /> Logout</button>
                    </div>
                </div> : <Link href={'/userGoogleSignUp'} className="text-sm font-medium hover:text-gray-600">Login</Link>}
                <div className="h-5 w-[1px] bg-[#CCCCCC] mx-4 lg:hidden"></div>
                <RiMenu3Fill onClick={() => setopen(true)} className="cursor-pointer lg:hidden" />
            </div>
        </div>
    )
}
