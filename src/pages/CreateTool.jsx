/** @format */
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import AuthenticatdHeader from "../components/layout/AuthenticatedHeader";
import { DragFile } from "../assets/icons/Icon";
import { ArrowLeft } from "../assets/icons/Icon";
import { ArrowRight } from "../assets/icons/Icon";
import { AddSign } from "../assets/icons/Icon";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";

const CreateTool = () => {
  const [isCreate, setIsCreate] = useState(false);
  const fileInputRef = useRef(null);

  const handleCreate = () => {
    setIsCreate(!isCreate);
  };
  // Handle file input click
  const handlClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      {/* Header section */}
      <div className='fixed z-10'>
        <AuthenticatdHeader />
      </div>
      {/* Main layout grid structure */}
      <div className='grid grid-cols-[minmax(5rem,_auto)_1fr] grid-rows-[auto_1fr] h-screen pt-24'>
        {/* Sidebar section */}
        <div className='row-span-full border border-[#E1E1E1] w-auto min-w-[5rem]'>
          {/* Sidebar content based on whether the "create" state is true or false */}
          {isCreate ? (
            <div className='rounded-full p-4'>
              <div className='flex justify-between w-72'>
                <span className='text-xl font-semibold text-[#111111]'>
                  Pin Drafts
                </span>
                <span
                  className='hover:bg-[#E1E1E1] rounded-full p-4 cursor-pointer'
                  onClick={handleCreate}>
                  <ArrowRight />
                </span>
              </div>
              <Button
                title='Create new'
                className='bg-[#E1E1E1] text-[#111111] w-full mt-5 text-base font-semibold'
              />
            </div>
          ) : (
            <div className='border-b border-[#E1E1E1] flex flex-col pt-2 items-center space-y-10 h-40'>
              <span
                className='hover:bg-[#E1E1E1] rounded-full p-4 cursor-pointer'
                onClick={handleCreate}>
                <ArrowLeft />
              </span>
              <span className='hover:bg-[#E1E1E1] rounded-full p-4 cursor-pointer'>
                <AddSign />
              </span>
            </div>
          )}
          <div></div>
        </div>

        {/* Header for the "Create Pin" section */}
        <div className='h-20 py-8 px-6 border border-[#E1E1E1]'>
          <h1 className='text-xl text-[#111111] font-semibold'>Create Pin</h1>
        </div>

        {/* Scrollable content section */}
        <div
          className={`p-10 w-full overflow-y-auto max-h-[calc(100vh-10rem)] ${
            isCreate ? "flex-col" : "flex"
          }`}>
          {/* File upload form */}
          <div
            className={`w-2/5 p-7 h-screen border-b border-[#E9E9E9] ${
              isCreate && "mx-auto"
            }`}>
            <form
              className='w-full h-full rounded-3xl bg-[#E9E9E9] flex flex-col items-center p-8 cursor-pointer'
              onClick={handlClick}>
              <DragFile />
              <h3 className='text-center w-56'>
                Choose a file or drag and drop it here
              </h3>
              <div className='text-center mt-auto'>
                We recommend using high quality .jpg files less than 20 MB or
                .mp4 files less than 200 MB.
              </div>
              {/* Hidden file input */}
              <input
                type='file'
                name=''
                id=''
              />
            </form>
            <Button
              title='Save from URL'
              className='bg-[#E1E1E1] text-[#111111] w-full mt-14 text-base font-semibold'
            />
          </div>

          {/* Content area for the form fields */}
          <div
            className={`w-3/5 p-5 text-sm text-[#211922] font-normal space-y-6 h-screen ${
              isCreate && "mx-auto mt-24"
            }`}>
            <InputField
              type='text'
              placeholder='Add a title'
              label='Title'
              className='border border-[#F5F5F5] '
            />
            {/* Textarea for description */}
            <div>
              <label htmlFor=''>Description</label>
              <textarea
                className='w-full border border-[#F5F5F5] rounded-2xl '
                rows={5}></textarea>
            </div>
            <InputField
              type='text'
              placeholder='Add a link'
              label='Link'
              className='border border-[#F5F5F5]'
            />
            {/* Select dropdown for boards */}
            <div>
              <label htmlFor=''>Board</label>
              <select className='w-full border border-[#F5F5F5] focus:border-[#F5F5F5] outline-none p-3 rounded-xl'>
                <option value=''>Choose a board</option>
                <option value=''></option>
              </select>
            </div>
            <InputField
              type='text'
              placeholder='Search for a tag'
              label='Tagged topics(0)'
              className='border border-[#F5F5F5] outline-none'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTool;
