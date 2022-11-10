import React from "react";
import { Link } from 'react-router-dom'
import { useContext} from "react";
import { AddContext } from "../context";

export default function Nav () {

    const {cartItems} = useContext(AddContext)

    return (
        <nav className='bg-[#FFFFFF] md:w-[8%] w-[15%] h-full sticky bottom-0 left-0 top-0 flex flex-col justify-between items-center py-12 md:py-6'>

            <Link to="/" className="block w-[80%]">
            <img src="/logo.svg" alt="" className='w-full' /> 
            </Link>

            <article className='flex flex-col space-y-10 font-thin'>
                <Link to="/"><i className="fa-solid fa-bars"></i></Link>
                <Link to="/history"><i className="fa-solid fa-rotate-left"></i></Link>
                <Link to="/stats"><i className="fa-solid fa-signal"></i></Link>
            </article>

            <Link to="/aside" className='bg-[#F9A109] w-8 h-8  rounded-full flex justify-center items-center text-white relative md:hidden'>
                <i className="fa-solid fa-cart-shopping"></i>
                {cartItems.length > 0 && <p className="absolute text-[10px] h-3 w-3 bg-[#EB5757] flex justify-center items-center top-[-5px] right-0 rounded-sm">{cartItems.length}</p>}
            </Link>

            <button className='bg-[#F9A109] w-8 h-8  rounded-full md:flex justify-center items-center text-white relative hidden '>
                <i className="fa-solid fa-cart-shopping"></i>
                {cartItems.length > 0 && <p className="absolute text-[10px] h-3 w-3 bg-[#EB5757] flex justify-center items-center top-[-5px] right-0 rounded-sm">{cartItems.length}</p>}
            </button>
        </nav>
    )
}
