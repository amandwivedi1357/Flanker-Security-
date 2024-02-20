import React, { useState, useEffect } from 'react';
import './toast.css'; // You need to define the styles for the toast

const Toast = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Call onClose after timeout
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${isVisible ? 'show' : ''} ${type}`}>
      {message}
    </div>
  );
};

export  {Toast};
