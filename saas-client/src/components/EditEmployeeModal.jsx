"use client";

import {  Modal, Select } from "flowbite-react";
import { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Component({ state, setState }) {
  const [openModal, setOpenModal] = useState(true);
  const [modalSize, setModalSize] = useState("7xl");

  return (
    <>
      <Modal
        show={openModal}
        size={modalSize}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Edit Employee Details</Modal.Header>
        <Modal.Body>
          <div className="flex justify-center">
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Your email" />
                </div>
                <TextInput
                  id="email2"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Your password" />
                </div>
                <TextInput id="password2" type="password" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="repeat-password" value="Repeat password" />
                </div>
                <TextInput
                  id="repeat-password"
                  type="password"
                  required
                  shadow
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="agree" />
                <Label htmlFor="agree" className="flex">
                  I agree with the&nbsp;
                  <Link
                    href="#"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    terms and conditions
                  </Link>
                </Label>
              </div>
              <Button type="submit">Register new account</Button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Submit</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
