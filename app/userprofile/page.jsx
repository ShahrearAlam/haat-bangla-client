import Image from 'next/image'
import profile from "@/public/assect/profile.png"
import { useSelector } from 'react-redux'
import PageTaitleBox from '@/components/pageTaitleBox/PageTaitleBox';
import { useEffect, useState } from 'react';
import ModalLayout from '@/components/modal/ModalLayout';
import { LiaEditSolid } from "react-icons/lia";
import { useUpdateUserMutation, useUserDataQuery } from '@/lib/user/userApiSlice';
import generateFormData from '@/components/utils/GenerateFormData';
import toast from 'react-hot-toast';


export default function UserProfilePage() {

    const { user } = useSelector(state => state.auth);
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Add loading state
    const [fullName, setFullName] = useState(user?.fullName || '');
    const [profilePicture, setProfilePicture] = useState(user?.profilePicture || null);
    const [previewImage, setPreviewImage] = useState(user?.profilePicture || profile);

    useEffect(() => {
        setFullName(user?.fullName || '');
        setProfilePicture(user?.profilePicture || null);
        setPreviewImage(user?.profilePicture || profile);
    }, [user])

    const handleNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        setProfilePicture(file);
        setPreviewImage(URL.createObjectURL(file));
    };

    // update user
    const [updateUser] = useUpdateUserMutation();
    const { refetch } = useUserDataQuery();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateData = { fullName };
        if (profilePicture) {
            updateData['image'] = profilePicture;
        }
        const formDataFormet = generateFormData(updateData);
        const res = await updateUser(formDataFormet);
        if (res?.error) {
            toast.error('Profile update failed, please try again', { position: 'bottom-center' })
            return;
        }
        toast.success('profile successfully update', { position: 'bottom-center' });
        refetch();
        setOpen(false);
    };

    return (
        <div>
            <PageTaitleBox title='প্রোফাইল' />
            <div className="container px-5 2xl:px-20 mx-auto pb-20">
                <div className="shadow px-8 py-4 flex items-center gap-5 my-7 rounded-lg relative">
                    <button onClick={() => setOpen(true)} className='absolute top-2 right-2 text-sm font-medium px-4 py-1.5 rounded hover:bg-emerald-200 bg-emerald-100 text-emerald-600'>Edit profile</button>
                    <Image width={1000} height={1000} src={user?.profilePicture ? user?.profilePicture : profile} alt="sellterPrifle" className="sm:h-28 h-20 w-20 sm:w-28 rounded-full border border-slate-600" />
                    <div className="font-medium">
                        <h2 className="mb-4">{user?.fullName}</h2>
                        <p>{user?.email}</p>
                    </div>
                </div>
            </div>

            <ModalLayout openModal={open} setOpenModal={setOpen} >
                <form onSubmit={handleSubmit} className=' bg-white rounded-xl p-4 mx-auto'>
                    <h1 className='text-lg font-medium flex items-center gap-2 mb-4'><LiaEditSolid className='text-2xl text-emerald-600' /> Edit Profile</h1>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={handleNameChange}
                            placeholder='Enter your name...'
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">Profile Picture</label>
                        <input
                            type="file"
                            id="profilePicture"
                            onChange={handleProfilePictureChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                        />
                        {profilePicture && (
                            <div className="mt-4">
                                <Image src={previewImage} alt="Profile Picture Preview" className="h-28 w-28 rounded-full border border-slate-600" width={100} height={100} />
                            </div>
                        )}
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'}`} disabled={isLoading}>
                            {isLoading ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </ModalLayout>
        </div>
    )
}
