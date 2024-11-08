/** @format */

import { useContext, useState } from "react";
import Form from "../ui/Form";
import InputField from "../ui/InputField";
import Modal from "../constant/Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../ui/Button";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/authContext";

const LogInForm = ({ openModal, closeModal, onSubmit }) => {
  const { setIsAuthenticated, logIn, isLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const togglePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    logIn({ email, password });
  };
  return (
    <Modal
      openModal={openModal}
      closeModal={closeModal}>
      <Form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center'>
          <InputField
            type='email'
            label='Email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='focus-within:border-white'
          />
          <InputField
            type={isVisiblePassword ? "text" : "password"}
            label='Password'
            placeholder='Create a password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={
              <div
                className='cursor-pointer pr-2'
                onClick={togglePassword}>
                {isVisiblePassword ? (
                  <FaEye className='h-3 w-3 text-gray-600 ' />
                ) : (
                  <FaEyeSlash className='h-3 w-3 text-gray-600 ' />
                )}
              </div>
            }
          />
          <span className='font-semibold text-sm text-[#111111] hover:underline  self-start w-64 pb-3 mx-auto'>
            <a href=''>Can't get into your account?</a>
          </span>
          <Button
            className='font-semibold w-64 mb-1 rounded-full py-2.5 px-3 text-base bg-[#CC0000] hover:bg-[#b60000] text-[#FFFFFF] '
            title={isLoading ? "LogIn..." : "Continue"}
            type='submit'
          />
          <p className='text-[#333333] font-bold text-sm'>OR</p>
          <div className='flex items-center border rounded-full w-64 px-3 mt-4'>
            <FcGoogle className='w-7 h-7' />
            <Button
              className='font-normal font-sans w-64 mb-1  py-2.5 px-3 text-sm text-center text-[#3c4043] '
              title='Continue with Google'
            />
          </div>
          <div className=' text-center mt-4'>
            <p className='text-[#767676] text-xs font-normal w-96 px-2  '>
              By continuing, you agree to Pinterest's
              <a
                href=''
                className='text-[#111111] font-semibold hover:underline'>
                Term of Service
              </a>
              and acknowledge you've read our
              <a
                href=''
                className='text-[#111111] font-semibold hover:underline'>
                &nbsp;Privacy Policy<br></br>
              </a>
              <a
                href=''
                className='text-[#111111] font-semibold pb-1 hover:underline border-b border-[#211922]'>
                &nbsp;Notice at Collection
              </a>
            </p>
          </div>
          <div className='text-xs font-normal text-[#111111] my-3'>
            <a href=''> Not on Pinterest yet?Sign up</a>
          </div>
          <div className='text-xs text-[#111111] font-normal text-center pb-3'>
            Are you a business?
            <a href=''>Get started here!</a>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default LogInForm;
