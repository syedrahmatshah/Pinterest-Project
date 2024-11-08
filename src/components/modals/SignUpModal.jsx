/** @format */

import React from "react";
import SignUpForm from "../../pages/SignUpForm";
import Modal from "../constant/Modal";

const SignUpModal = ({ openModal, closeModal }) => {
  return (
    <Modal
      openModal={openModal}
      closeModal={closeModal}>
      <SignUpForm />
    </Modal>
  );
};

export default SignUpModal;
