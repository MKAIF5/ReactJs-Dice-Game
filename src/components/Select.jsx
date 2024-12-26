import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Select = () => {

    // const numberSelect = () => {
    //     Swal.fire({
    //         imageUrl: "https://placeholder.pics/svg/300x1500",
    //         imageHeight: 500,
    //         imageAlt: "A tall image",
    //         showCloseButton: true
    //     });
    // }

    const [select, setSelect] = useState(null);

    const numberOfDiv = [1, 2, 3, 4, 5, 6];

    const clickDiv = (e) => {
        setSelect(e);
    };


    return (
        <>
            <div>

                <div className='my-5 text-center font-bold text-3xl sm:text-5xl text-gray-700'>
                    <h1>Let's Play </h1>
                </div>

                <div className='my-40 cursor-pointer'>
                    <h1 className='mb-10 font-bold text-center text-gray-700
                  text-2xl md:text-4xl '>Select The Number</h1>
                    <div className='flex flex-wrap gap-5 justify-center'>

                        {
                            numberOfDiv.map((num) => (
                                <div
                                    key={num}
                                    onClick={() => clickDiv(num)}
                                    className={`border-2 border-dotted border-black p-3 flex justify-center
                                items-center w-20 h-20 hover:scale-110 transition transform
                                ease-in-out shadow-lg   
                                    ${select === num ? "bg-black text-white" :
                                            "bg-white text-black"}
                                  md:w-20 sm:w-16 xs:w-14
                                    `}>{num}</div>
                            ))}
                    </div>
                    <div className='flex justify-center mt-10'>
                        <button className='bg-gray-500 p-3 w-40'>Next</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Select
