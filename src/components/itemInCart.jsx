import React from "react";
import { useContext, useState } from "react";
import { AddContext } from "../context";

export default function ItemInCart ({name, itemObj}) {
    const [editAmount, setEditAmount] = useState(false)
    const [isMarked, setIsMarked] = useState(false)

    const {
            increaseCount, 
            reduceCount, 
            removeFromCart, 
            mark, 
            removeMark
        } = useContext(AddContext)

    function handleEdit () {
        setEditAmount(!editAmount)
    }

    function handleChange (e) {
        const {checked} = e.target
        setIsMarked(checked)
    }

    return (
        <article className="flex items-center justify-between text-xs">
            <article className="flex items-center space-x-2">
                {mark && <input type="checkbox" name="mark" 
                         checked={isMarked} 
                         id="" 
                         onChange={handleChange}
                         className='border-[#F9A109] border'
                />}
                <h1>{name}</h1>
            </article>

            {editAmount 
            ? 
                <article className="bg-white space-x-3 flex rounded-lg pr-1 h-8 text-[#F9A109]">
                    <button 
                        onClick={() => {
                            removeFromCart(itemObj.id)
                            removeMark()
                        }}
                        className="bg-[#F9A109] rounded-lg flex justify-center items-center text-white h-full px-2 w-[20%]">
                        <i className="fa-solid fa-trash"></i>
                    </button>

                    {itemObj.count > 1 && <button onClick={() => reduceCount(itemObj.id)}>
                        <i className="fa-solid fa-minus"></i>
                    </button>}

                    <button 
                        onClick={handleEdit} 
                        className="border-2 px-2 text-sm rounded-xl text-[#F9A109] border-[#F9A109] "
                    >
                        {itemObj.count}{itemObj.count > 1 ? "pcs" : "pc"}
                    </button>

                    <button onClick={() => increaseCount(itemObj.id)}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </article>
            :
            
            <button 
                onClick={handleEdit} 
                className="border-2 w-[50px] text-sm rounded-full text-[#F9A109] border-[#F9A109] "
            >
                    {itemObj.count}{itemObj.count > 1 ? "pcs" : "pc"}
            </button>}

        </article>
    )
}