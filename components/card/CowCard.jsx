'use client'
import Image from 'next/image'
import { GrLocation } from 'react-icons/gr';
import { useRouter } from 'next/navigation';
import cow1 from '@/public/assect/cow/cow1.png'
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useDeleteSaveProductMutation, useSaveProductMutation } from '@/lib/product/productApiSlice';
import { useSelector } from 'react-redux';

export default function CowCard({ data, refetch }) {

	const router = useRouter();
	const { user } = useSelector(state => state.auth);
	const { pictures, _id, haat, category, weight, price, isSavedProduct } = data || {};

	// product save
	const [saveProduct] = useSaveProductMutation();
	const [deleteSaveProduct] = useDeleteSaveProductMutation();

	const handleProductSave = async (producId) => {
		if (!user) return router.push('/userGoogleSignUp')
		const res = await saveProduct(producId);
		if (res?.error) {
			return console.log(res);
		}
		refetch();
		console.log(res);
	}

	const handleProductUnsave = async (producId) => {
		if (!user) return router.push('/userGoogleSignUp')
		const res = await deleteSaveProduct(producId);
		if (res?.error) {
			return console.log(res);
		}
		refetch();
		console.log(res);
	}

	return (
		<div className='group' >
			<div className='rounded-xl border relative'>
				<Image width={1000} height={1000} src={pictures?.length ? pictures[0] : cow1} alt='cow_image' className='p-5 group-hover:bg-[#FFF6EC] w-full h-[13.5rem]' />
				{isSavedProduct ?
					<div onClick={() => handleProductUnsave(_id)} className="absolute top-2 right-2 z-[10] h-9 w-9 rounded-full bg-white border border-gray-100 text-red-500 cursor-pointer flex items-center justify-center text-xl" >
						<IoHeartSharp />
					</div>
					:
					<div onClick={() => handleProductSave(_id)} className="absolute top-2 right-2 z-[10] h-9 w-9 rounded-full bg-white border border-gray-100 cursor-pointer flex items-center justify-center text-xl" >
						<IoHeartOutline />
					</div>
				}
				<div onClick={() => router.push(`/haat/${_id}`)} className=' cursor-pointer group-hover:flex hidden absolute sm:top-[6rem] top-[5rem] left-0 h-12 w-full bg-black bg-opacity-40  items-center justify-center text-white text-sm z-[10]'>
					<button>VIEW MORE</button>
				</div>
			</div>
			<div className='mt-3 flex justify-between mb-4'>
				<div>
					<h3 className='text-lg font-semibold '>{category}</h3>
					<h3 className='text-sm text-[#686868]'>{weight}</h3>
				</div>
				<div className='bg-[#FFEFDC] px-3 h-8 text-[12px] font-medium justify-center rounded-full flex items-center gap-2 text-black'>
					<GrLocation className='text-[16px]' />
					<p>{haat}</p>
				</div>
			</div>
			<h3 className='text-xl font-bold'>৳{price}</h3>
		</div>
	)
}
