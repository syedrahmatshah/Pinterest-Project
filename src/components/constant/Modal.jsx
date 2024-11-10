/** @format */

import { Dialog, DialogPanel } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ openModal, closeModal, children, onBlur }) => {
  return (
    <div>
      <>
        <Dialog
          open={openModal}
          onClose={closeModal}
          onBlur={onBlur}
          as='div'
          className='relative z-30 focus:outline-none  '>
          <div className='fixed inset-0 z-30  overflow-y-auto  '>
            <div className=' w-full flex min-h-full items-center justify-center p-6 backdrop-blur-xs bg-black bg-opacity-60'>
              <DialogPanel
                transition
                className='w-full  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'>
                <div className='w-6/12 mx-auto relative '>
                  <RxCross2
                    onClick={closeModal}
                    className='w-7 h-7  left-96 top-4 absolute hover:bg-gray-300 rounded-full cursor-pointer'
                  />
                  {children}
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </>
    </div>
  );
};

export default Modal;
