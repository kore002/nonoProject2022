import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
  const notify = () => {
    toast.success("This is a test success", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: false
    });
  };
  return (
    <div>
      <button onClick={notify}>Toast</button>
      <ToastContainer />
    </div>
  );
};

export default Toastify;
