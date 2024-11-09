import ForgotPassForm from "@/components/page/forgotpass/ForgotPassForm";


export const metadata = {
    title: 'Forgot password | Gypsyadvisor',
    description: 'Recover your Gypsyadvisor account quickly and securely. Follow simple steps to reset your password and regain access to your personalized travel experiences.',
};


export default function ForgotPasswordPage() {
    return (
        <div className="container mx-auto 2xl:px-20 px-5 min-h-screen flex items-center justify-center z-[2] relative">
            <div className="relative  bg-white border border-gray-200  p-5 rounded-2xl xl:w-1/3 lg:w-[45%] sm:w-2/3 w-[97%] pt-8">
                <h1 className="text-2xl font-medium text-center z-[2] relative ">Forgot Password</h1>
                <div className="h-[1px] w-2/3 bg-black mx-auto mb-6"></div>
                <ForgotPassForm />
            </div>
        </div>
    );
}
