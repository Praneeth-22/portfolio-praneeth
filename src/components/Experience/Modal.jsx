// Modal.jsx
import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ children, onClose }) => {
  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  // Close if clicking outside content area
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal__backdrop" onClick={handleBackdropClick}>
      <div className="modal__container">
        <button className="modal__close" onClick={onClose}>
          <i className="uil uil-times"></i>
        </button>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;