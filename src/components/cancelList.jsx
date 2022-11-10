import React, {useContext } from "react";
import { AddContext } from "../context";


export default function CancelList () {

    const {
            cancelListPopUp, 
            removeCancelPopUp, 
            emptyCart,
            handleMark
        } = useContext(AddContext)

        if (cancelListPopUp) {

            return (
        
                <section className="flex flex-col md:w-42 w-[75%] p-4 absolute bg-white rounded-lg text-sm items- justify-center space-y-8 top-1/2 left-1/2 z-50 translate-x-[-50%] translate-y-[-50%]">
                    <div className="flex justify-between items-start ">
                        <h4 className="max-w-[70%]">Are you sure you want to cancel this list ?</h4>
                        <button onClick={removeCancelPopUp} className="text-[#828282]"><i className="fa-solid fa-close"></i></button>
                    </div>
                    <div className="tex-center flex justify-center items-center space-x-5 self-end">
                        <button onClick={removeCancelPopUp} className="inline-block font-semibold">Cancel</button>
                        <button onClick={() => {
                            removeCancelPopUp()
                            emptyCart()
                            handleMark()
                        }} className="inline-block p-2 px-4 rounded-lg text-white bg-[#EB5757]">Yes</button>
                    </div>
                </section>
            )

        }
}