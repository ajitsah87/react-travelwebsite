import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Cart from "../Cart";
import {toast} from "sonner"
import axios from "axios";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false)

  const [signInData,setSignInData]= useState(
    {
      email: "",
      password: "",
    }
  )
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSignInChange = (e) => {
    const { id, value } = e.target;
    setSignInData({ ...signInData, [id]: value });
  };
console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setLoading(true)
    toast.loading("Please wait..")
    try {
        const {data} = await axios.post("https://e-com-backend-neon.vercel.app/api/user", formData)
        console.log(data)
        localStorage.setItem("userInfo", JSON.stringify(data))
        toast.success("registered successfully")
        closeModal()
    } catch (err) {
        if (err.response) {
            toast.error(err.response.data.error || "something went wrong")
        } else {
            toast.error(err.message)
        }
    } finally {
        setLoading(false)
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault()

    toast.loading("Please wait..")
    try {
        const {data} = await axios.post("https://e-com-backend-neon.vercel.app/api/user/auth", signInData)
        console.log(data)
        localStorage.setItem("userInfo", JSON.stringify(data))
        toast.success("registered successfully")
       
        closeModal()
    } catch (err) {
        if (err.response) {
            toast.error(err.response.data.error || "something went wrong")
        } else {
            toast.error(err.message)
        }
    } finally {
        setLoading(false)
    }

  }

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add("overflow-y-hidden");
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove("overflow-y-hidden");
  };

  // Close modal on ESC key press
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };
  console.log(signInData)
  return (
    <>
      {modalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
          onKeyDown={handleKeyDown}
        >
          <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
                <RxCross2 className="text-2xl" />
              </button>
            </div>
            <div className="p-6 pt-0 text-center">
            <div className=" backdrop-blur-lg bg-opacity-80 rounded-lg p-3  text-black">
      <h2 className="text-2xl font-bold bg-purple-600 py-2 text-white rounded-md">SignUp</h2>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-left text-purple-600 ml-2">Your name</label>
          <input
            type="text"
            id="name"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="Andrew Jackson"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-left text-purple-600 ml-2">Your email</label>
          <input
            type="email"
            id="email"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="andrew@mail.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-left text-purple-600 ml-2">Your password</label>
          <input
            type="password"
            id="password"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="*"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <p className="text-red-500 pb-5"></p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            disabled={loading}
            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
          >
            Register
          </button>
          <div className="flex items-center text-sm">
            <p>Already have an account?</p>
            <p className="underline cursor-pointer ml-1"
            onClick={closeModal}>Sign in</p>
          </div>
        </div>
      </form>
    </div>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center ">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
           <h1 className="text-center text-xl font-bold">TRAVL <i className="fab fa-gripfire"></i></h1> 
            </div>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-2">
                <div className="flex flex-col items-center">
                  <button
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out  hover:shadow focus:shadow-sm  border-green-500 border-[1px] hover:border-none"
                    onClick={openModal}
                  >
                   
                    <span className="ml-4">Create An New Account</span>
                  </button>
                </div>
                <div className="my-12 border-b text-center">
                 
                </div>
                <form onSubmit={handleSignIn} className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    value={signInData.email}
                    onChange={handleSignInChange}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    value={signInData.password}
                    onChange={handleSignInChange}
                  />
                  <button type="submit" disabled={loading} className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-">Sign In</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by Cartesian Kinetics
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-green-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            
            >
              <img src="/undraw_traveling_yhxq.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}