import TopNav from "./TopNav";
import Mainnav from "./mainnav/Mainnav";


export default function Navbar() {
    return (
        <>
            <TopNav />
            <div className="sticky top-0 left-0 sm:h-[3.3rem] w-screen bg-white !z-[5000]">
                <div className="!z-[5000] relative bg-white">
                    <Mainnav />
                </div>
            </div>
        </>
    )
}
