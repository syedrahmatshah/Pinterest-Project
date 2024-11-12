/** @format */

import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import Form from "../components/ui/Form";
import { AuthContext } from "../context/authContext";
import moment from "moment";

const SignUpForm = ({ onSubmit }) => {
  // <<<<<<<<<<<< State and Context Initialization >>>>>>>>>>>>>>
  const { setIsAuthenticated, signUp, isLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  // <<<<<<<<<<<< Toggle Password Visibility >>>>>>>>>>>>>>
  const togglePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  // <<<<<<<<<<<< Handle Form Submission >>>>>>>>>>>>>>
  const handleSubmit = (e) => {
    e.preventDefault();

    // Format date of birth before sending it to the signUp function
    const formattedDate = moment(dateOfBirth).format("YYYY-MM-DD");
    signUp({ email, dateOfBirth: formattedDate, password }); // Call signUp with user details
  };

  return (
    // <<<<<<<<<<<< Form Component >>>>>>>>>>>>>>
    <Form
      onSubmit={handleSubmit}
      description='Find new ideas to try'>
      <div className='flex flex-col items-center px-24'>
        {/* <<<<<<<<<<<< Email Input Field >>>>>>>>>>>>>> */}
        <InputField
          type='email'
          label='Email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='focus-within:border-white'
        />

        {/* <<<<<<<<<<<< Password Input Field with Toggle >>>>>>>>>>>>>> */}
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

        {/* <<<<<<<<<<<< Date of Birth Input Field >>>>>>>>>>>>>> */}
        <InputField
          type='date'
          label='Birthdate'
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)} // Updated to capture date of birth
        />

        {/* <<<<<<<<<<<< Submit Button >>>>>>>>>>>>>> */}
        <Button
          className='font-semibold w-64 mb-1 rounded-full py-2.5 px-3 text-base bg-[#CC0000] hover:bg-[#b60000] text-[#FFFFFF] '
          title={isLoading ? "SignUp..." : "Continue"}
          type='submit'
        />

        {/* <<<<<<<<<<<< Google Authentication Button >>>>>>>>>>>>>> */}
        <p className='text-[#333333] font-bold text-sm'>OR</p>
        <div className='flex items-center border rounded-full w-64 px-3 mt-4'>
          <FcGoogle className='w-7 h-7' />
          <Button
            className='font-normal font-sans w-64 mb-1 py-2.5 px-3 text-sm text-center text-[#3c4043] '
            title='Continue with Google'
          />
        </div>

        {/* <<<<<<<<<<<< Terms and Privacy Policy Links >>>>>>>>>>>>>> */}
        <div className='w-64 text-center mt-4'>
          <p className='text-[#767676] text-xs font-normal w-64 px-2'>
            By continuing, you agree to Pinterest's
            <a
              href=''
              className='text-[#111111] font-semibold hover:underline'>
              &nbsp;Term of Service
            </a>
            &nbsp;and acknowledge you've read our
            <a
              href=''
              className='text-[#111111] font-semibold hover:underline'>
              &nbsp;Privacy Policy
            </a>
            <a
              href=''
              className='text-[#111111] font-semibold hover:underline'>
              &nbsp;Notice at Collection
            </a>
          </p>
        </div>

        {/* <<<<<<<<<<<< Login Link for Existing Users >>>>>>>>>>>>>> */}
        <div className='text-xs font-normal text-[#111111] my-6'>
          Already a member? <a href=''>Log in</a>
        </div>
      </div>

      {/* <<<<<<<<<<<< Footer with Business Account Signup >>>>>>>>>>>>>> */}
      <div className='p-4 w-full rounded-b-3xl text-base text-[#111111] font-semibold text-center bg-[#E9E9E9]'>
        <a href=''>Create a free business account</a>
      </div>
    </Form>
  );
};

export default SignUpForm;
