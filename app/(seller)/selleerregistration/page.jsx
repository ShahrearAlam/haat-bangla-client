import PageTaitleBox from "@/components/pageTaitleBox/PageTaitleBox";
import RegistrationFrom from "@/components/page/home/seller/sellerRegistration/RegistrationFrom";

export default function SellerRegistrationPage() {
    return (
        <div>
            <PageTaitleBox title='বিক্রেতা রেজিস্ট্রেশন' />
            <div className="container px-5 2xl:px-20 mx-auto mb-20 ">
                <div className="md:w-[40rem] mx-auto mb-12 sm:mb-0">
                    <h1 className="text-lg font-semibold my-10">আপনি বিক্রেতা হিসেবে রেজিস্ট্রেশন করতে নিচের তথ্যাদি পূরণ করুন</h1>
                    <RegistrationFrom />
                </div>
            </div>
        </div>
    )
}
