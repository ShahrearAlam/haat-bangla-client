'use client'
import PageTaitleBox from "@/components/pageTaitleBox/PageTaitleBox";
import InputField from "@/components/ui/InputField";
import ShortLabel from "@/components/ui/ShortLabel";
import { usePhoneVerificationMutation } from "@/lib/auth/authApiSlice";
import { auth } from "@/lib/firebase.config";
import { PhoneAuthProvider, RecaptchaVerifier, signInWithCredential } from "firebase/auth";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { localDataGetter, localDataRemove, localDataSetter } from "@/components/utils/LocalStorage";
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/Loading";
import toast from "react-hot-toast";

export default function RegisterVerification() {

	const router = useRouter();
	const [formData, setFormData] = useState({ verifyotp: '' });
	const [phoneVerification] = usePhoneVerificationMutation();
	const [loading, setLoading] = useState(false)

	const handleResendClick = () => {
		// firebase work start
		const recaptchaVerifier = new RecaptchaVerifier(
			"recaptcha-container-resend-otp",
			{
				size: "invisible",
				callback: (response) => { },
				"expired-callback": () => { },
			},
			auth);

		recaptchaVerifier.render();
		const phoneAuthProvider = new PhoneAuthProvider(auth);
		phoneAuthProvider.verifyPhoneNumber(localDataGetter('number'), recaptchaVerifier)
			.then((verificationId) => {
				localDataSetter('verificationId', verificationId);
				toast.success('OTP Send Successfully', { position: 'bottom-center' });
			})
			.catch((error) => {
				toast.error('Number was invalid, try another number', { position: 'bottom-center' })
			})
	};

	// OTP Verification
	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true)

		// firebase work start
		const credential = PhoneAuthProvider.credential(
			localDataGetter('verificationId'),
			formData.verifyotp
		);

		signInWithCredential(auth, credential)
			.then(async (userCredential) => {
				const res = await phoneVerification({ number: localDataGetter('number'), otpVerified: true });
				if (res?.error) {
					setLoading(false);
					return;
				}
				toast.success("OTP Successfully Verify", { position: "bottom-center" })
				localDataRemove('verificationId');
				localDataRemove('number');
				router.push('/login');
				setLoading(false)
			})
			.catch((error) => {
				toast.error("Your OTP Code doesn't match", { position: "bottom-center" })
				setLoading(false);
			});
	};

	return (
		<div>
			<PageTaitleBox title='ওটিপি ভেরিফিকেশন' />
			<div id="recaptcha-container-resend-otp"></div>
			<form onSubmit={onSubmit} className="container px-5 2xl:px-20 mx-auto  gap-8 mb-6 relative sm:w-[40rem] w-full text-center pt-5">
				<h1 className="text-lg font-semibold my-10">আপনার মোবাইল নাম্বার ভেরিফাই করুন</h1>
				<div className="flex sm:flex-row flex-col sm:items-center sm:gap-10 gap-2">
					<ShortLabel text="মোবাইল নাম্বার ভেরিফাই করুন" hfor="verify" />
					<InputField
						type='number' id="verify" placeholder="ওটিপি দিন . . ." value={formData.verifyotp}
						onChange={(e) => setFormData((prevData) => ({ ...prevData, verifyotp: e.target.value }))} required
					/>
				</div>
				<div className="flex items-center gap-3 text-sm justify-end mt-3">
					<p className="text-blue-500 cursor-pointer hover:underline" onClick={handleResendClick}>Resend OTP Send</p>
				</div>

				<div className="flex justify-end sm:mt-12 mt-8">
					<button disabled={loading} className="flex gap-2 items-center justify-center cursor-pointer px-4 py-3 rounded-md hover:bg-transparent hover:text-[#044884] bg-[#044884] text-white border-[#044884] border ">	{loading ? <Loading /> : <p>রেজিস্ট্রেশন সম্পন্ন করুন</p>}<BsArrowRight /></button>
				</div>
			</form>
		</div>
	)
}