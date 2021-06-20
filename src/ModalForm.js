import React from "react";
import Modal from "react-modal";
import './App.css';

export default function CustomModal({ show, onClose }) {
  return (
    <div>
      <Modal isOpen={show} toggle={onClose} className='Modal' overlayClassName='Overlay' onRequestClose={onClose}>
        <h1>
            holi
        </h1>
        <button>
            Aceptar
        </button>
      </Modal>
    </div>
  );
}
