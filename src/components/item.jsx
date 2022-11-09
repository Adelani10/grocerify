import React from "react";
import { useContext, useState } from "react";
import { AddContext } from "../context";


export default function Item ({name, item}) {

    const {addToCart, increaseCount} = useContext(AddContext)

    return (
        <div className="bg-white rounded-lg text-xs flex items-center justify-between shadow lg:py-2 px-2 py-1 max-h-16 capitalize box-border" >
            <h4>{name}</h4>
            <button 
                onClick={() =>{
                    addToCart(item, item.id)
                }} 
                className="inline-block text-[#C1C1C4]">
                    <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}

