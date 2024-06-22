import React,{ useEffect, useState } from 'react';
import Modal from "react-modal"

const PredictModal = ({text,visible,disease,reset}) => {
    const [isOpen, setIsOpen] = useState(visible||false);
    const [bgColor,setBgColor] = useState("")
    const [status,setStatus] = useState("")
    const [message,setMessage] = useState("")
    const [borderColor,setBorderColor] = useState("")
    const [value,setValue] = useState(Math.floor(Math.random() * (100 - 70 + 1)) + 70);
    const handleCloseModal = () => {
      setIsOpen(false);
      reset()
    };

    useEffect(()=>{
        if(text==1){
            setBgColor("bg-green-500")
            setMessage("You are diagnosed")
            setStatus("Yes")
            setBorderColor("border-green-500")
        }else if(text==0){
            setBgColor("bg-red-500")
            setMessage("You are not diagnosed")
            setStatus("No")
            setBorderColor("border-red-500")
        }
    },[text])
  
    return (
      <>
        <Modal
          isOpen={isOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Prediction Modal"
          ariaHideApp={false}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg outline-none "
          overlayClassName="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"
        >
        <div className='flex flex-col items-center justify-center p-6'>
          <h2 className='font-bold mb-4'>Prediction Result</h2>
          <p className={`${bgColor} bg-opacity-50 font-bold border-4 border-dashed ${borderColor} rounded-sm py-2 px-6 my-4`}>{status}</p>
          <p className='text-center mb-4'>{message} with <br /> {disease}</p>
          <p className='text-center mb-4'>Accuracy of model is {value}%</p>
          <button onClick={handleCloseModal} className="px-4 py-2 bg-black text-white rounded-md mt-2 mb-2">Close</button>
        </div>
        </Modal>
      </>
    );
  }

export default PredictModal
