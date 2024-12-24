import React from 'react'
import dice from "../assets/dice-removebg-preview.png"

const Home = () => {
    return (
        <>
        <div className='flex items-center justify-around bg-zinc-50 min-h-screen'>
            <img className='w-[40%]' src={dice} alt="" />
            <div>
                <h1 className='text-gray-700 font-bold text-7xl'>Dice Game</h1>
            <button>Start Game</button>
            </div>

        </div>
        </>
    )
}

export default Home;

