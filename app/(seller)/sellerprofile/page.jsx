import PageTaitleBox from "@/components/pageTaitleBox/PageTaitleBox";
import SellerProfileCard from "@/components/page/home/seller/sellerProfile/SellerProfileCard";
import SellerPackage from "@/components/page/home/seller/sellerProfile/SellerPackage";
import Link from "next/link";

export default function page() {
	return (
		<div>
			<PageTaitleBox title='বিক্রেতা প্রোফাইল' />
			<div className="container px-5 2xl:px-20 mx-auto pb-20">
				<h1 className="font-semibold">আপনি বিক্রেতা হিসেবে প্রোফাইল সম্পন্ন করতে নিচের তথ্যাদি পূরণ করুন</h1>
				<SellerProfileCard />
				<div className="flex sm:flex-row flex-col items-center gap-2 font-medium">
					<div className="flex items-center gap-2">
						<h2>আপনার স্লট প্যাকেজ : </h2>
						<p>স্লট প্যাকেজ -১</p>
					</div>
					<Link href={'/package'} className="px-4 py-2.5 rounded bg-[#044884] text-white hover:text-[#044884] border border-[#044884] hover:bg-transparent ml-3">প্যাকেজ আপগ্রেড করুন</Link>
				</div>
				<div className="bg-[#EDF9FF] px-5 py-4 rounded my-10">
					<p>স্লট প্যাকেজ -১</p>
				</div>
				<SellerPackage />
			</div>
		</div>
	)
}
