import { GrLocation } from "react-icons/gr";
import { PiPhoneCall } from "react-icons/pi";
export default function TopNav() {
    return (
        <div className=" bg-[#EDF2EE]  relative  lg:!z-[50000]">
            <div className="container mx-auto 2xl:px-20 px-5 flex sm:flex-row flex-col gap-2 sm:gap-0 items-center justify-between py-3 ">
                <div className="flex items-center gap-2.5">
                    <GrLocation />
                    <p className="text-sm text-[#333333]">1901 Andorkilla,Chittagong,Bangladesh</p>
                </div>
                <div className="flex items-center gap-2.5">
                    <PiPhoneCall />
                    <p className="text-sm text-[#333333]">(880) 1323-12345</p>
                </div>
            </div>
        </div>
    )
}
