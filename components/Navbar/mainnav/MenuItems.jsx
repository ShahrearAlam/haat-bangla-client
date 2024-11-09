
import MenuItem from "./MenuItem";
import DropdownMenu from "./DropdownMenu";
import hat from '@/public/assect//elements/hat.png'
import categoryimg1 from '@/public/assect/categorymenu/categoryCow1.png'
import categoryimg2 from '@/public/assect/categorymenu/categoryCow2.png'
import categoryimg3 from '@/public/assect/categorymenu/categoryCow3.png'
import categoryimg4 from '@/public/assect/categorymenu/categoryCow4.png'
import categoryimg5 from '@/public/assect/categorymenu/categoryCow5.png'

export default function MenuItems() {
    const categoryMenu = [
        { id: 1, name: "গরু", img: categoryimg1 },
        { id: 2, name: "ছাগল", img: categoryimg2 },
        { id: 3, name: "মহিষ", img: categoryimg3 },
        { id: 4, name: "ভেড়া", img: categoryimg4 },
        { id: 5, name: "উট", img: categoryimg5 },
    ];

    const hatItems = [
        { id: 1, name: "মিরপুর", img: hat },
        { id: 2, name: "আশুলিয়া", img: hat },
        { id: 3, name: "গাবতলি", img: hat },
        { id: 4, name: "কালশী", img: hat },
        { id: 5, name: "দিয়াবাড়ি", img: hat },
        { id: 6, name: "ভাষানটেক", img: hat },
    ];
    return (
        <ul className="hidden lg:flex  bg-white">
            <MenuItem title="Home" href="/" />
            <MenuItem title="Haat" href="/haat" />
            {/* <DropdownMenu title="Nearest Haat" items={hatItems} path="/nearestHaat" />
            <DropdownMenu title="Qurbani Cattle" items={categoryMenu} path="/qurbaniCattle" /> */}
            <MenuItem title="Package" href="/package" />
            <MenuItem title="Contest" href="/contest" />
        </ul>
    )
}
