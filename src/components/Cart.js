import React from 'react'

function Cart() {
return(
    <>
     <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm m-5">
            <div className="relative">
                <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                    BOOKED
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <div className="text-gray-600  my-3 grid grid-cols-2">
                    <p className='font-bold'> Start Date</p>
                    <p className='mb-4'>13/02/2024</p>
                    <p className='font-bold'> End Date</p>
                    <p>13/02/2024</p>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">$19.99</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        More Details
                    </button>
                </div>
            </div>
        </div>
    </>
)
}

export default Cart
