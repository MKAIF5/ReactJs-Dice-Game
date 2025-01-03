import React from 'react';
import dice from "../assets/dice.png";
import { Link } from 'react-router-dom';
import "./Animate.css"

const Home = () => {
    return (
        <div className='flex flex-wrap items-center justify-around bg-zinc-50 min-h-screen'>
            <img className='sm:w-[40%] w-[80%] animate-slide-in' src={dice} alt="dice" />
            <div className='space-y-10 animate-slide-in'>
                <h1 className='text-gray-700 font-bold text-7xl animate-slide-in'>Dice Game</h1>
                <div className='flex justify-center'>
                    <Link
                        to={'/select'}
                        className='p-3 w-48 border-4 border-dotted border-gray-400
                        bg-transparent shadow-lg shadow-slate-400 duration-500 ease-in-out
                        hover:scale-110 text-center outline-none'
                    >
                        Start Game
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;