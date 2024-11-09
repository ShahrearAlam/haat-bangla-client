import Link from "next/link";

const MenuItem = ({ title, href }) => (
    <li>
        <Link href={href}>
            <p className="text-sm font-semibold text-[#1A2327] hover:text-[#759F55] py-4 relative z-[5] lg:px-4 px-2 ">{title}</p>
        </Link>
    </li>
);

export default MenuItem;