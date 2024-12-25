import React from 'react'
import Swal from 'sweetalert2'

const Game = () => {

    const numberSelect = () => {
        Swal.fire({
            imageUrl: "https://placeholder.pics/svg/300x1500",
            imageHeight: 500,
            imageAlt: "A tall image",
            showCloseButton: true
        });
    }

    return (
        <>
            <div>

                <div className='my-5 text-center font-bold text-5xl text-gray-700'>
                    <h1>Let's Play </h1>
                </div>
                <div>
                    <button
                        onClick={numberSelect}
                        className='bg-orange-500 p-3'>Select The Number</button>
                </div>
            </div>
        </>
    )
}

export default Game
