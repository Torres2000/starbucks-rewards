"use client";
import { useState } from "react";
import { X } from "phosphor-react";
import { Button, Modal } from "keep-react";
import Carousel from "./carousel";

function ModalComponent(valor) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (modal) => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => openModal(valor)}
        className="my-3 text-sm border-b-[1px] text-[#006241]  bg-white p-0 rounded-none underline hover:no-underline hover:bg-white"
      >
        Learn more
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Body className="flex w-[30rem] flex-col items-center  p-6 lg:p-8 !bg-white">
          <Modal.Icon className="flex justify-end w-full !bg-white">
            <X size={32} onClick={closeModal} className="cursor-pointer" />
          </Modal.Icon>
          <Modal.Content className=" text-center">
            <Carousel valor={valor} />
          </Modal.Content>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
