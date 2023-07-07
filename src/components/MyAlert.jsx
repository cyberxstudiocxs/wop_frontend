
import React, { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import "../styles/menu.css";

const MyAlert = (msg) => {
  
  const navigat = useNavigate();
  const location = useLocation();

  
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
  
  }, []);



  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="emp-box"></ModalHeader>
        <h3 className="emp-heading">Notification!</h3>
        <ModalBody>
          <p>
            {msg}
          </p>
    
        </ModalBody>
        <ModalFooter>
        <Button  className="worker-btns" >Ok</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default MyAlert;