/* eslint-disable react/no-unescaped-entities */
'use client'
import PageTaitleBox from '@/components/pageTaitleBox/PageTaitleBox';
import InputField from '@/components/ui/InputField';
import Loading from '@/components/ui/Loading';
import ShortLabel from '@/components/ui/ShortLabel';
import { useLoginMutation } from '@/lib/auth/authApiSlice';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { BsArrowRight } from 'react-icons/bs';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

export default function LoginPage() {

	const router = useRouter();
	const [formData, setFormData] = useState({ number: '', password: '' });
	const [seePass, setSeePass] = useState(false);
	const [login] = useLoginMutation();
	const [loading, setLoading] = useState(false)

	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true)
		let { number, password } = formData;
		if (number.startsWith('0')) {
			number = number.slice(1);
		}
		number = '+880' + number;

		const res = await login({ number, password });
		if (res?.error) {
			toast.error(res?.error?.data?.message, { position: 'bottom-center' });
			setLoading(false);
			return;
		}
		toast.success('Login Succesfully', { position: 'bottom-center' });
		setLoading(false)
		router.push('/');
	};

	return (
		<div>
			<PageTaitleBox title='লগইন' />
			<form onSubmit={onSubmit} className="container px-5 2xl:px-20 mx-auto  gap-8  relative sm:w-[40rem] w-full text-center pt-5 mb-32">
				<h1 className="text-lg font-semibold my-10">লগইন করুন</h1>

				<div className="flex sm:items-center items-start sm:flex-row flex-col gap-1 sm:gap-8 mb-6">
					<ShortLabel text="মোবাইল নাম্বার" hfor="number" />
					<InputField
						type={'number'} id="number" placeholder="মোবাইল নাম্বার লিখুন . . ." value={formData.number}
						onChange={(e) => setFormData((prevData) => ({ ...prevData, number: e.target.value }))} required
					/>
				</div>

				<div className="flex sm:items-center items-start sm:flex-row flex-col gap-1 sm:gap-8 mb-2 relative">
					<ShortLabel text="পাসওয়ার্ড দিন" hfor="password" />
					<InputField
						type={seePass ? 'text' : 'password'} id="password" placeholder="পাসওয়ার্ড লিখুন. . ." value={formData.password}
						onChange={(e) => setFormData((prevData) => ({ ...prevData, password: e.target.value }))} minLength={6} required
					/>
					<div onClick={() => setSeePass(!seePass)} className="absolute sm:top-6 top-12 right-3 flex items-center cursor-pointer">
						{seePass ? <FaRegEye /> : <FaEyeSlash />}
					</div>
				</div>
				<p className='my-2 text-sm text-right'>Forget Password? <span onClick={() => router.push('/forgotpassword')} className='text-[#044884] font-medium cursor-pointer hover:underline'>reset</span></p>
				<div className="flex justify-end mt-6">
					<button
						disabled={loading}
						className="flex gap-2 items-center justify-center cursor-pointer group px-4 py-3 rounded-md hover:bg-transparent hover:text-[#044884] bg-[#044884] text-white border-[#044884] border"
					>
						{loading ? <Loading /> : <p>লগইন করুন</p>}
						<BsArrowRight />
					</button>
				</div>
				<p className='mt-16 text-sm text-center'>Don't have an account? <span onClick={() => router.push('/selleerregistration')} className='text-[#044884] font-medium cursor-pointer hover:underline'>register</span></p>
			</form>
		</div>
	)
}
