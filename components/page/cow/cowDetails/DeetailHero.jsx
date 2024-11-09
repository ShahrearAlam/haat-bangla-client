'use client'
import cowimg from '@/public/assect/cow/cow1.png'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import ImgMagnifier from "@/components/ImgMagnifier/ImgMagnifier";
import { useAddViewDataMutation, useDeleteSaveProductMutation, useGetSingleProductQuery, useSaveProductMutation } from "@/lib/product/productApiSlice";
import { useSelector } from "react-redux";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


export default function DeetailHero({ productId }) {

    const router = useRouter();
    const [saveProduct] = useSaveProductMutation();
    const [deleteSaveProduct] = useDeleteSaveProductMutation();
    const { user } = useSelector(state => state.auth);
    const userId = user ? user?._id : null;
    const [viewdetails, setViewDetails] = useState(false)
    const { data, refetch } = useGetSingleProductQuery({ productId, userId });
    const product = data?.data;
    const [addViewData] = useAddViewDataMutation();

    if (!product) {
        return
    }

    const handleProductSave = async (producId) => {
        if (!user) return router.push('/userGoogleSignUp')
        const res = await saveProduct(producId);
        if (res?.error) {
            toast.error('Someting went wrong, please try again.', { position: 'bottom-center' });
            return;
        }
        refetch();
    }

    const handleProductUnsave = async (producId) => {
        if (!user) return router.push('/userGoogleSignUp')
        const res = await deleteSaveProduct(producId);
        if (res?.error) {
            toast.error('Someting went wrong, please try again.', { position: 'bottom-center' });
            return;
        }
        refetch();
    }

    const handleVeiwDetails = async () => {
        if (!user) return router.push('/userGoogleSignUp')
        const res = await addViewData({ productId, userId });
        if (res?.error) {
            toast.error('Someting went wrong, please try again.', { position: 'bottom-center' });
            return;
        }
        setViewDetails(!viewdetails);
    }

    return (
        <div className="md:flex-row flex-col flex gap-10">
            <div className="md:w-1/2 bg-gray-100 rounded-2xl sm:p-10 h-fit">
                <ImgMagnifier imageUrl={product?.pictures?.length ? product?.pictures[0] : cowimg} />
            </div>
            <div className="md:w-1/2 md:pl-8 xl:pl-14 pl-0">
                <div className="flex items-center  mb-4">
                    <h2 className="text-2xl font-semibold">{product?.origin}</h2>
                </div>

                <div className="flex items-center sm:gap-20 gap-5 mb-10 ">
                    <div className='bg-[#FFEFDC] px-4 h-10 text-sm font-medium justify-center rounded-full inline-flex items-center gap-2 text-black'>
                        <GrLocation className='text-[18px]' />
                        <p>{product?.division}</p>
                    </div>
                    <p className="text-md font-medium ">{product?.haat} হাট</p>
                </div>

                <CheckmarkDetail label="ওজন" value={product?.weight} />
                <CheckmarkDetail label="বয়স" value={product?.age} />

                <hr className="my-7" />
                <h3 className='text-2xl font-bold mb-7'>৳{product?.price}</h3>

                {
                    product?.isSavedProduct ? <button onClick={() => handleProductUnsave(productId)} className="px-5 py-1.5 border border-[#759F55] text-[#759F55] hover:bg-[#759F55] hover:text-white">Remove Wishlist</button> : <button onClick={() => handleProductSave(productId)} className="px-5 py-1.5 border border-[#759F55] text-[#759F55] hover:bg-[#759F55] hover:text-white">Add to Wishlist</button>
                }


                <hr className="my-7" />

                <div className="xl:flex-row flex-col flex xl:items-end items-start xl:gap-10 gap-5">
                    <div>
                        <div className="flex items-center gap-2 my-2.5">
                            <IoMdCheckmarkCircleOutline className="text-xl text-[#F6AB27]" />
                            <div className="flex items-center gap-1 text-gray-400">
                                Owners Name: {viewdetails ? product?.user?.fullName : 'click to view'}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 my-2.5">
                            <IoMdCheckmarkCircleOutline className="text-xl text-[#F6AB27]" />
                            <div className="flex items-center gap-1  text-gray-400">
                                Owners Mobine No:  {viewdetails ? product?.user?.phone?.number : 'click to view'}
                            </div>
                        </div>
                    </div>
                    <button onClick={handleVeiwDetails} className="text-white px-3 py-2 bg-[#0077E5] font-medium rounded-sm text-sm mb-2">{viewdetails ? "Click to Hide" : "Click to See"}</button>
                </div>

            </div>
        </div>
    )
}



// Reusable component for displaying checkmark details
const CheckmarkDetail = ({ icon, label, value }) => (
    <div className="flex items-center gap-2 my-2.5">
        <IoMdCheckmarkCircleOutline className="text-xl text-[#F6AB27]" />
        <div className="flex items-center gap-1 font-medium">
            <p className="text-gray-600">{label}</p>
            <span>- {value}</span>
        </div>
    </div>
);