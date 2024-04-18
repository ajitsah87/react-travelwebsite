import React, { useMemo, useState } from "react";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import useDataContext from "../../Hook/useDataContext";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { BiMinus, BiPlus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

export default function Destination() {
  const { id } = useParams();

  const { data, loading, error } = useDataContext();

  const destination = useMemo(() => {
    if (data.length > 0) {
      return data.find((destination) => destination._id === id);
    }
  }, [data]);


  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [bookData, setBookData] = useState({
    name: "",
    StartDate: "",
    EndDate: "",
    personCount: 1,
  });
   const navigate=useNavigate()
  const handleChange = (e) => {
    const { id, value } = e.target;
    setBookData({ ...bookData, [id]: value });
  };
  if (loading ) return <div>loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      setBookData((pre) => ({ ...pre, personCount: count + 1 }));
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setBookData((pre) => ({ ...pre, personCount: count-1 }));
    }
  };

  console.log(bookData);
  const closeModal = () => {
    setModalOpen(false);
  
  };
  const openModal = () => {
    setModalOpen(true);
  
  };
  console.log(bookData);
  const handleSubmit = async (e) => {
    e.preventDefault()
    toast.loading("Please wait..")
    try {
      const token = JSON.parse(localStorage.getItem("userInfo") || "")?.token
      const payload = {destinationId: id, startDate: bookData.StartDate, endDate: bookData.EndDate, personCount: bookData.personCount, }
      
      const {data} = await axios.post("https://e-com-backend-neon.vercel.app/api/book_destination", payload,{headers:{Authorization:`Bearer ${token}`}})
      console.log(data)
      navigate("/thankyou")
      toast.dismiss()
    } catch (err) {
        console.log(err)
    }

  }
  return (
    <>
      {modalOpen && (
        <div className="  max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className=" text-2xl py-6 px-6 bg-gray-900 text-white text-center font-bold uppercase relative">
            Book an Appointment
            <div className="flex justify-end top-2 right-2 absolute">
              <button
                type="button"
                // onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={closeModal}
              >
                <RxCross2 className="text-2xl" />
              </button>
            </div>
          </div>
          <form className="py-4 px-6" onSubmit={handleSubmit} >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                value={bookData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="date"
              >
                Start Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="StartDate"
                type="date"
                placeholder="Select a date"
                required
                value={bookData.StartDate}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="date"
              >
                End Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="EndDate"
                type="date"
                placeholder="Select a date"
                required
                value={bookData.EndDateDate}
                onChange={handleChange}
              />
            </div>

            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="time"
            >
              Guest
            </label>
            <div
              class="flex items-center mb-4 "
              id="guest"
              value={bookData.personCount}
            >
              <button
                type="button"
                class="border rounded-md py-2 px-4 mr-2 "
                onClick={decrement}
              >
                <BiMinus />
              </button>
              <span class="text-center w-8">{count}</span>
              <button
                type="button"
                class="border rounded-md py-2 px-4 ml-2"
                onClick={increment}
              >
                <BiPlus />
              </button>
            </div>

            <div className="flex items-center justify-center mb-4">
              <button
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      )}
      <div
        className={` bg-center bg-cover bg-no-repeat text-white h-[350px] `}
        style={{ backgroundImage: `url(${destination?.image_url})` }}
      ></div>
      <div className="destination-container">
        <div className="info-wrapper">
          <h2 className="!text-4xl ">{destination?.location}</h2>
          <p className="!text-2xl !mb-10">{destination?.Tagline}</p>
          <h2 className="!text-3xl ">Description</h2>
          <p>{destination?.description}</p>

          <h4 className="text-2xl">Top PLace to visit near your loaction</h4>
          {destination?.famous_places.map((item) => (
            <ul key={item} className="mt-4 -ml-6">
              <li>{item}</li>
            </ul>
          ))}
        </div>
        <div className="booking-container">
          <div className="booking-wrapper">
            <section className="booking-info">
              <h5>From</h5>
              <p className="price">&#8360; {destination?.Amount}</p>
              <p className="per-person">per person</p>
            </section>
            <button type="button" className="btn-book" onClick={openModal}>
              Book now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
