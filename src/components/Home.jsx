import React from 'react'
import dice from "../assets/dice.png"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='flex items-center justify-around bg-zinc-50 min-h-screen'>
                <img className='w-[40%]' src={dice} alt="" />
                <div className='space-y-10'>
                    <h1 className='text-gray-700 font-bold text-7xl'>Dice Game</h1>
                    <div className='flex justify-center'>
                        <Link
                        to={'/game'}
                        className='p-3 w-48 border-4 border-dotted border-gray-400
                    bg-transparent shadow-lg shadow-slate-400 duration-500 ease-in-out
                     hover:scale-110 text-center outline-none'>Start Game</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;

