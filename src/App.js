import React from "react";
import Map from './Map';
import './App.css';
import ModalF from './ModalForm';
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <div className="App" >
      <Map onOpen = {handleOpen}/>  
      <ModalF show = {show} onClose = {handleClose}/>
    </div> 
  );
}
