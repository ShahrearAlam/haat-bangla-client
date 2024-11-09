

export default function ModalLayout({ openModal, setOpenModal, children }) {
    return (
        <div className="mx-auto flex items-center justify-center">
            <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center !z-[100000] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full  bg-[#0C2530] bg-opacity-70 duration-100`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute  lg:w-[40%] sm:w-[70%] w-[90%]  drop-shadow-2xl rounded  ${openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}
