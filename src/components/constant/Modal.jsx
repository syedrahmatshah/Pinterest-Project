/** @format */

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <div>
      <>
        <Button
          onClick={open}
          className='rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white'>
          Open dialog
        </Button>

        <Dialog
          open={isOpen}
          as='div'
          className='relative z-10 focus:outline-none'
          onClose={close}
          __demoMode>
          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4'>
              <DialogPanel
                transition
                className='w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'>
                {children}
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </>
    </div>
  );
};

export default Modal;
