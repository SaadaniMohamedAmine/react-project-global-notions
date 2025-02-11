// import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  // IconButton,
} from "@material-tailwind/react";

const ModalHeader = ({ children }) => {
  return <DialogHeader>{children}</DialogHeader>;
};
ModalHeader.propTypes = {
  children: PropTypes.element,
};

const ModalBody = ({ children }) => {
  return <DialogBody>{children}</DialogBody>;
};
ModalBody.propTypes = {
  children: PropTypes.element,
};

const ModalFooter = ({ children }) => {
  return <DialogFooter>{children}</DialogFooter>;
};
ModalFooter.propTypes = {
  children: PropTypes.element,
};

export const Modal = ({ open, handleOpen, children }) => {
  return (
    <>
      <Dialog size="xs" open={open} handler={handleOpen}>
       {children}
      </Dialog>
    </>
  );
};

Modal.defaultProps = {
  open: false,
  handleOpen: Function.prototype,
};

Modal.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
  children: PropTypes.element.isRequired,
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
