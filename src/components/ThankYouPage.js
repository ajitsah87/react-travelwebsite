
import React from 'react';
import { useNavigate } from 'react-router-dom';
function ThankYouPage() {
const navigate = useNavigate()
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 py-10">
      <div className="mx-auto max-w-md overflow-hidden rounded-3xl text-gray-700 shadow-md">
        <div className="h-40 bg-rose-500 pt-10 sm:h-56">
          <img className="h-full w-full object-contain" src="/undraw_super_thank_you_re_f8bo.svg" alt="" />
        </div>
        <div className="flex flex-col items-center bg-white px-4 py-10">
          <h2 className="mb-2 text-3xl font-bold text-rose-500 sm:text-4xl">Thank you!</h2>
          <p className="mb-8 font-medium text-gray-500">For supporting me with your donation</p>
          <div className="flex items-center rounded-xl bg-rose-500 p-4">
          
              <button className="font-medium text-white" onClick={()=>{navigate("/")}}> Home</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
