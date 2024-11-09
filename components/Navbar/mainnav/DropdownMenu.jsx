import Link from "next/link";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropdownMenu = ({ title, items, path }) => {

    return (
        <Link href={path} className="flex items-center gap-2 relative group lg:px-3 px-1.5 ">
            <p className="text-sm font-semibold text-[#1A2327] hover:text-[#759F55] py-4">{title}</p>
            <MdOutlineKeyboardArrowDown />
            <div className="w-[22rem] bg-white shadow-md absolute z-[-1] group-hover:top-[3.3rem] -top-28 -left-5 transition-all ease-in-out duration-300 group-hover:visible invisible opacity-0 group-hover:opacity-100">
                <h1 className="p-5 font-semibold">{title}</h1>
                <div className="h-[1px] w-full bg-gray-300"></div>
                <div className="grid grid-cols-2 gap-5 p-5">
                    {items.map(item => (
                        <div key={item.id} className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded">
                            <Image src={item.img} alt="category_img" width={50} height={50} />
                            <p className="font-semibold text-[15px]">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default DropdownMenu;
