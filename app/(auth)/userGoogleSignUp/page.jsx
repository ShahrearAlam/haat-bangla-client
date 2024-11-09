'use client'
import PageTaitleBox from '@/components/pageTaitleBox/PageTaitleBox'
import { useSocialAuthMutation } from '@/lib/auth/authApiSlice';
import { auth } from '@/lib/firebase.config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function UserGoogleSignUp() {

	const router = useRouter();
	const provider = new GoogleAuthProvider();
	const [socialAuth] = useSocialAuthMutation();

	const googleSignIn = () => {
		signInWithPopup(auth, provider)
			.then(async (result) => {
				const res = await socialAuth({ result });
				if (res?.error) {
					console.log(res)
					return;
				}
				router.push('/');
			})
			.catch(error => error);
	}

	return (
		<>
			<PageTaitleBox title='সাইন ইন' />
			<div className=" py-24 flex flex-col items-center justify-center text-center">
				<p className=" text-lg font-semibold mb-10"> সাইন ইন করুন</p>
				<button type='button' onClick={() => googleSignIn()} className="flex items-center gap-2 py-2 px-6 border rounded hover:bg-gray-100 "><FcGoogle /> Google এর মাধ্যমে সাইন ইন করুন</button>
			</div>
		</>
	)
}
