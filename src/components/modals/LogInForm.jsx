/** @format */

import { useContext, useState } from "react";
import Form from "../ui/Form";
import InputField from "../ui/InputField";
import Modal from "../constant/Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../ui/Button";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/authContext";

const LogInForm = ({ openModal, closeModal, onSubmit, onBlur }) => {
  // Accessing authentication context to handle user authentication
  const { setIsAuthenticated, logIn, isLoading } = useContext(AuthContext);

  // Local state to manage form fields and password visibility toggle
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  // Toggle password visibility (show/hide)
  const togglePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn({ email, password }); // Call login function from context
  };

  return (
    <Modal
      openModal={openModal} // Modal visibility controlled by parent
      closeModal={closeModal} // Modal close handler
      onBlur={onBlur} // Close modal on blur event
    >
      <Form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center px-24'>
          {/* Input field for email */}
          <InputField
            type='email'
            label='Email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Handle email input change
            className='focus-within:border-white'
          />

          {/* Input field for password with toggle visibility */}
          <InputField
            type={isVisiblePassword ? "text" : "password"} // Toggle between text/password input
            label='Password'
            placeholder='Create a password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Handle password input change
            icon={
              <div
                className='cursor-pointer pr-2'
                onClick={togglePassword} // Toggle password visibility
              >
                {isVisiblePassword ? (
                  <FaEye className='h-3 w-3 text-gray-600 ' /> // Show password icon
                ) : (
                  <FaEyeSlash className='h-3 w-3 text-gray-600 ' /> // Hide password icon
                )}
              </div>
            }
          />

          {/* Link to reset password or get account help */}
          <span className='font-semibold text-sm text-[#111111] hover:underline  self-start w-64 pb-3 mx-auto'>
            <a href=''>Can't get into your account?</a>
          </span>

          {/* Log in button */}
          <Button
            className='font-semibold w-64 mb-1 rounded-full py-2.5 px-3 text-base bg-[#CC0000] hover:bg-[#b60000] text-[#FFFFFF] '
            title={isLoading ? "LogIn..." : "Continue"} // Button title changes based on loading state
            type='submit'
          />

          {/* Divider */}
          <p className='text-[#333333] font-bold text-sm'>OR</p>

          {/* Google login button */}
          <div className='flex items-center border rounded-full w-64 px-3 mt-4'>
            <FcGoogle className='w-7 h-7' />
            <Button
              className='font-normal font-sans w-64 mb-1  py-2.5 px-3 text-sm text-center text-[#3c4043] '
              title='Continue with Google'
            />
          </div>

          {/* Terms and Conditions and Privacy Policy links */}
          <div className=' text-center mt-4'>
            <p className='text-[#767676] text-xs font-normal w-96 px-2  '>
              By continuing, you agree to Pinterest's
              <a
                href=''
                className='text-[#111111] font-semibold hover:underline'>
                Term of Service
              </a>
              &nbsp;and acknowledge you've read our
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

          {/* Link to Sign Up page */}
          <div className='text-xs font-normal text-[#111111] my-3'>
            <a href=''> Not on Pinterest yet?Sign up</a>
          </div>

          {/* Link for businesses to get started */}
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
