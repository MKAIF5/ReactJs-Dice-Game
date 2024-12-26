import React from 'react'
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

    return (
        <>
            <div>

                <div className='my-5 text-center font-bold text-5xl text-gray-700'>
                    <h1>Let's Play </h1>
                </div>

                <div className='my-40 cursor-pointer'>
                    <h1 className='mb-10 text-3xl font-bold text-center text-gray-700
                    '>Select The Number</h1>
                    <div className='flex gap-5 justify-center'>
                        <div className='border-2 border-dotted border-black p-3 flex justify-center
                     items-center w-20 h-20 hover:scale-110 transition transform
                     ease-in-out shadow-lg'>1</div>
                        <div className='border-2 border-dotted border-black p-3 flex justify-center
                     items-center w-20 h-20 hover:scale-110 transition transform
                     ease-in- shadow-lg'>2</div>
                        <div className='border-2 border-dotted border-black p-3 flex justify-center
                     items-center w-20 h-20 hover:scale-110 transition transform
                     ease-in- shadow-lg'>3</div>
                        <div className='border-2 border-dotted border-black p-3 flex justify-center
                     items-center w-20 h-20 hover:scale-110 transition transform
                     ease-in- shadow-lg'>4</div>
                        <div className='border-2 border-dotted border-black p-3 flex justify-center
                     items-center w-20 h-20 hover:scale-110 transition transform
                     ease-in- shadow-lg'>5</div>
                        <div className='border-2 border-dotted border-black p-3 flex justify-center
                     items-center w-20 h-20 hover:scale-110 transition transform
                     ease-in- shadow-lg'>6</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Select
