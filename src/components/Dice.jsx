import React from 'react'
import dice1 from "../assets/dice-1.svg"

const Dice = () => {
    return (
        <>
        <div className='ml-20 mt-5 max-w-32 text-center'>
            <h1 className='text-6xl font-bold'>0</h1>
            <p className='text-2xl'>Total Score</p>
        </div>
            <div className=''>
                <div className='flex justify-center items-center'>
                    <img className='w-48 cursor-pointer hover:scale-105
                    transition' src={dice1} alt="" />
                </div>
                <div className='flex justify-center my-8'>
                    <h1 className='text-2xl font-bold'>Click On Dice To Roll</h1>
                </div>
                <div className='flex justify-center'>
                    <button className='border-2 border-dotted border-black
                    bg-transparent p-3 w-72 hover:scale-105 transition-all
                    shadow-xl'>Reset</button>
                </div>
                <div className='flex justify-center my-7'>
                    <button className='bg-black w-72 p-3 text-white
                    rounded hover:bg-white hover:text-black hover:border-2
                   hover:border-black hover:scale-105'>Show Rules</button>
                </div>
            </div>
        </>
    )
}

export default Dice
