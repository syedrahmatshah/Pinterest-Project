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
import { Form, Upload } from "antd";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { DropDown } from "../assets/icons/Icon";
import SwitchComp from "../components/ui/Switch";

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
        <div className='h-20 py-8 px-6 border border-[#E1E1E1] flex justify-between items-center'>
          <h1 className='text-xl text-[#111111] font-semibold'>Create Pin</h1>
          <Button
            title='Publish'
            className='p-5 bg-[#CC0000] hover:bg-[#b60000] text-[#FFFFFF]'
          />
        </div>

        {/*<<<<<<<<<<<<<<<<<<< Scrollable content section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div
          className={`p-10 w-full overflow-y-auto max-h-[calc(100vh-10rem)] ${
            isCreate ? "flex-col" : "flex"
          }`}>
          <div className={`w-2/5 p-7 h-screen  ${isCreate && "mx-auto"}`}>
            <div className='border-b border-[#E9E9E9]'>
              <Form.Item
                valuePropName='fileList'
                className='border-collapse !border-0'>
                <Upload.Dragger
                  name='files'
                  action='/upload.do'>
                  <div className='bg-[#E9E9E9] rounded-3xl w-full h-[400px] p-8 flex flex-col items-center justify-center border border-black border-dashed'>
                    <div className='pt-24'>
                      <DragFile />
                    </div>
                    <h3 className='text-center w-52 px-1 font-semibold text-gray-700 mt-4'>
                      Choose a file or drag and drop it here
                    </h3>
                    <div className='text-cent mt-auto'>
                      We recommend using high quality .jpg files less than 20 MB
                      or .mp4 files less than 200 MB.
                    </div>
                  </div>
                </Upload.Dragger>
              </Form.Item>
            </div>
            <Button
              title='Save from URL'
              className='bg-[#E1E1E1] text-[#111111] w-full mt-14 text-base font-semibold'
            />
          </div>

          {/*<<<<<<<<<<<<<<<<<<<<<< Content area for the form fields >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <div
            className={`w-3/5 p-5 text-sm text-[#211922] font-normal space-y-6 h-screen ${
              isCreate && "mx-auto mt-24"
            }`}>
            <InputField
              type='text'
              placeholder='Add a title'
              label='Title'
              className='border border-[#A5A5A5] outline-none focus:border-[#7FC1FF] focus:ring-4 focus:ring-[#7FC1FF]'
            />

            {/*<<<<<<<<<<<<<<<<<<<<< Textarea for description >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <div>
              <label htmlFor=''>Description</label>
              <textarea
                className='w-full border border-[#A5A5A5] p-2 rounded-2xl  focus:outline focus:outline-4 focus:outline-[#7FC1FF] '
                rows={5}></textarea>
            </div>

            <InputField
              type='text'
              placeholder='Add a link'
              label='Link'
              className='border border-[#A5A5A5] outline-none focus:border-[#7FC1FF] focus:ring-4 focus:ring-[#7FC1FF]'
            />

            {/*<<<<<<<<<<<<<<<<<<<<<<< Select dropdown for boards >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <div>
              <label htmlFor=''>Board</label>
              <select className='w-full border border-[#A5A5A5]  focus:border-[#F5F5F5] outline-none p-3 rounded-xl'>
                <option value=''>Choose a board</option>
                <option value=''></option>
              </select>
            </div>

            <div>
              <InputField
                type='text'
                placeholder='Search for a tag'
                label='Tagged topics(0)'
                className='border border-[#A5A5A5] outline-none focus:border-[#7FC1FF] focus:ring-4 focus:ring-[#7FC1FF]'
              />
              <div className='text-xs text-[#767676] font-normal'>
                Don't worry, people won't see your tags
              </div>
            </div>

            {/*<<<<<<<<<<<<<<<<<<<<< This is the section for Switch >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <div>
              <Disclosure
                as='div'
                defaultOpen={true}>
                <DisclosureButton className='group flex items-center gap-2'>
                  <span className='text-sm font-medium text-[#000000] '>
                    More Options
                  </span>
                  <DropDown className='size-3 fill-black  group-data-[open]:rotate-180' />
                </DisclosureButton>
                <DisclosurePanel className='mt-7 flex items-center gap-2 text-black'>
                  <SwitchComp />
                  <span className='text-base text-[#111111] font-normal'>
                    Show similar prducts
                  </span>
                </DisclosurePanel>
                <DisclosurePanel className='mt-7 flex items-start gap-2 text-black'>
                  <SwitchComp />
                  <div>
                    <span className='text-base text-[#111111] font-normal'>
                      Show similar prducts
                    </span>
                  </div>
                </DisclosurePanel>
                <DisclosurePanel>
                  <p className='ml-14 text-sm text-[#111111] font-normal'>
                    Shopping recommendations aren't available for Idea ads and
                    Pins with tagged products or paid partnership label
                  </p>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTool;
