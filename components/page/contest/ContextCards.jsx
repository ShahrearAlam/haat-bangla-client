/* eslint-disable @next/next/no-img-element */
'use client'
import ModalLayout from '@/components/modal/ModalLayout'
import Pagination from '@/components/pagination/Pagination'
import generateFormData from '@/components/utils/GenerateFormData'
import { useAddParticipantMutation, useGetAllContestsQuery } from '@/lib/contest/contestApiSlice'
import moment from 'moment'
import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { RxCross1, RxCross2 } from "react-icons/rx"
import { useSelector } from 'react-redux'
import { ImTrophy } from "react-icons/im";

export default function ContextCards() {

	const { user } = useSelector(state => state.auth);
	const [viewContest, setViewContest] = useState(false)
	const [openModal, setOpenModal] = useState(false)
	const initialState = { images: [] }
	const [formData, setFormData] = useState(initialState)
	const [previewImages, setPreviewImages] = useState([])
	const [currentPage, setCurrentPage] = useState(1);
	const limit = 6;
	const { data } = useGetAllContestsQuery({ page: currentPage, limit }, { refetchOnMountOrArgChange: true });
	const contests = data?.data?.contests;
	const [contestId, setContestId] = useState(null);
	const [contactNumber, setContactNumber] = useState('');
	const [addParticipant] = useAddParticipantMutation();

	const handleInputChange = (e) => {
		const { files } = e.target;
		const selectedFiles = [...files].slice(0, 4 - formData.images.length);
		const readers = selectedFiles.map(() => new FileReader());

		readers.forEach((reader, index) => {
			reader.onload = (e) => {
				setPreviewImages((prevImages) => [...prevImages, e.target.result]);
			};
			reader.readAsDataURL(selectedFiles[index]);
		});

		setFormData((prevData) => ({
			...prevData,
			images: [...prevData.images, ...selectedFiles],
		}));
	};

	const handleImageRemove = (index) => {
		const updatedImages = [...formData.images];
		updatedImages.splice(index, 1);
		setFormData((prevData) => ({
			...prevData,
			images: updatedImages,
		}));

		const updatedPreviewImages = [...previewImages];
		updatedPreviewImages.splice(index, 1);
		setPreviewImages(updatedPreviewImages);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!contestId && !user) return;
		// Form submission logic here
		const formDataFormet = generateFormData({ ...formData, contactNumber, contestId })
		const res = await addParticipant(formDataFormet);
		if (res?.error) {
			toast.error('Form Submitted failed, please try again.')
			return;
		}
		toast.success('Form successfuly Submitted.')
		setPreviewImages([])
		setFormData(initialState)
		setOpenModal(false);
	};

	return (
		<>
			<div className='grid lg:grid-cols-2 xl:gap-10 gap-5 '>
				{contests?.map(data => (
					<div key={data} className='bg-white rounded-xl flex sm:flex-row flex-col items-center xl:gap-4 gap-2 border shadow-md shadow-slate-100'>
						<div className='sm:h-full sm:w-[40%] w-full h-48 bg-gray-200 rounded-l-xl '>
							<Image width={1000} height={1000} className='w-full h-full' src={data?.mediaLink} alt="contest Image" />
						</div>

						<div className='xl:p-3 lg:p-2 sm:p-3 p-2 pb-4 sm:pb-3 sm:w-[60%]'>
							<h2 className='text-lg font-medium font-sans'>{data?.name}</h2>
							<p className='text-sm text-gray-500 mt-1 mb-3'>Total participate: <span>{data?.totalParticipant}</span></p>
							<p className='text-sm font-medium text-gray-600'>Start Date: <span className='text-black'>{moment(data?.startingTime).format('Do MMMM, YYYY')}</span></p>
							<p className='text-sm font-medium text-gray-600 mt-1 mb-4'>End Date: <span className='text-black'>{moment(data?.endingTime).format('Do MMMM, YYYY')}</span></p>
							{data?.isContestEnd
								?
								<button onClick={() => setViewContest(true)} className='text-sm font-medium bg-[#044884] text-white hover:bg-transparent hover:text-[#044884] border border-[#044884] py-1.5 px-4 rounded'>Veiw Winner</button>
								:
								<button onClick={() => { setOpenModal(true), setContestId(data?._id) }} className={`text-sm font-medium ${!data?.isParticipant ? "bg-black text-white hover:bg-transparent hover:text-black border border-black" : "bg-gray-300 text-black"} py-1.5 px-4 rounded`} disabled={data?.isParticipant}>{data?.isParticipant ? "Already Submit" : "Join Contest"}</button>
							}
						</div>
					</div>
				))}
			</div>

			<ModalLayout openModal={openModal} setOpenModal={setOpenModal}>
				<form onSubmit={handleSubmit} className='bg-white p-5 rounded-lg'>
					<div className='flex items-center justify-between border-b pb-2'>
						<h1 className='text-lg font-medium'>This is Contest Title for Haat Bangla</h1>
						<RxCross1 onClick={() => setOpenModal(false)} className='hover:text-red-500 hover:rotate-45 transition-all ease-in-out duration-150 cursor-pointer' />
					</div>

					<div className="mt-4 mb-6">
						<label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
						<input
							type="text"
							id="contactNumber"
							value={contactNumber}
							onChange={(e) => setContactNumber(e.target.value)}
							placeholder='Enter your name...'
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
							required
						/>
					</div>

					<div className='my-3'>
						<div className="flex flex-col gap-3 justify-between my-4">
							<label htmlFor="images" className="text-sm font-semibold">পশুর ছবি আপলোড করুন</label>
							<div class="flex items-center justify-center w-full">
								<label htmlFor="images" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
									<div class="flex flex-col items-center justify-center pt-5 pb-6">
										<svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
											<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
										</svg>
										<p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
										<p class="text-xs text-gray-500 dark:text-gray-400">Upload max 4 image</p>
									</div>
									<input onChange={handleInputChange}
										id="images"
										name="images"
										type="file"
										className="hidden"
										multiple
										required
										disabled={formData.images.length >= 4} />
								</label>
							</div>
						</div>

						{previewImages.length > 0 && (
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
								{previewImages.map((preview, index) => (
									<div key={index} className="relative">
										<img
											src={preview}
											alt="Uploaded animal image"
											className="w-full h-36 object-cover"
										/>
										<button
											type="button"
											className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white px-1.5 py-1 rounded-sm text-sm focus:outline-none"
											onClick={() => handleImageRemove(index)}
										>
											<RxCross2 />
										</button>
									</div>
								))}
							</div>
						)}
					</div>

					<div className='flex justify-end mt-4'>
						<button type='submit' className='text-sm font-medium bg-black text-white hover:bg-transparent hover:text-black border border-black py-1.5 px-4 rounded'>Submit</button>
					</div>
				</form>
			</ModalLayout>


			{
				viewContest && <div className="mx-auto flex items-center justify-center">
					<div onClick={() => setViewContest(false)} className={`fixed flex justify-center items-center !z-[100000] ${viewContest ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full  bg-[#0C2530] bg-opacity-70 duration-100`}>
						<div onClick={(e_) => e_.stopPropagation()} className={`absolute  2xl:w-[25%] lg:w-[33%] sm:w-[60%] w-[90%]  drop-shadow-2xl rounded  ${viewContest ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'}`}>
							<div className='bg-white p-5 rounded-lg'>

								<h1>View Winner</h1>
								<div className='h-[2px] w-1/3 bg-black'></div>
								<div className='mt-6'>
									<div className='p-3 rounded-md border flex items-center gap-4 mb-2 '><ImTrophy className='text-amber-500 text-lg' /> <p className='font-semibold'>Joy Paul</p></div>
								</div>
							</div>
						</div>
					</div>
				</div>

			}


			<div className="flex-1 flex items-center justify-center mt-24 mb-14">
				<Pagination setPage={setCurrentPage} totalCount={data?.data?.totalContest} limit={limit} />
			</div>
		</>
	)
}
