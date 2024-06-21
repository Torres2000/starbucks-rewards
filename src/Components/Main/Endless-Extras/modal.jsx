"use client";
import { useState } from "react";
import { X } from "phosphor-react";
import { Button, Modal } from "keep-react";

function ModalComponent ()  {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="flex w-[30rem] flex-col items-center p-6 lg:p-8">
          <Modal.Icon className="flex justify-end w-full bg-white">
            <X size={32} onClick={closeModal} className="cursor-pointer" />
          </Modal.Icon>
          <Modal.Content className="my-4 text-center">
            <h3 className="mb-2 text-body-1 font-bold text-metal-900 ">
              Payment Successful
              
            </h3>
            <p className="mx-auto max-w-xs text-body-4 font-normal text-metal-600">
              Your document has unsaved changes. Discard or save them as a new
              page to continue.
            </p>
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={closeModal} size="sm" color="success">
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
