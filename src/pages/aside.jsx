import React from "react";
import { useContext, useState } from "react";
import { AddContext } from "../context"
import ItemInCart from "../components/itemInCart";


export default function Aside () {
  const [name, setName] = useState("")


  const {
          showForm, 
          handleRemoveForm, 
          cartItems, 
          handleMark, 
          mark, 
          addCancelPopUp
        } = useContext(AddContext)

    return (
      <>
        {!showForm ? <aside className='bg-[#FFF0DE] pt-6 md:w-[30%] min-h-screen w-full h-full flex flex-col relative overflow-y-hidden'>

          <div className='flex items-center justify-between px-2 space-x-8 md:space-x-0 lg:space-x-8 bg-[#80485B] rounded-xl h-[20%] mx-3'>
              <img src="/source.svg" alt="" className='mb-8 -ml-2 md:hidden xl:inline-block' />

              <div className="text-white space-y-2">
                <h3 className='md:text-sm'>Didn't find what you need?</h3>
                <button onClick={handleRemoveForm} className='bg-white inline-block text-sm text-black border py-1 px-2 rounded-md'>
                  Add Item
                </button>
              </div>
          </div>

          <div className='font-bold text-[#34333A] px-3 mt-10 h-[60%] overflow-y-scroll'>
            {cartItems.length === 0 ? <h1 className="font-bold text-center">
              No Items
            </h1>
            :
            <article className="space-y-4 ">

                <div className="flex justify-between">
                  <h1 className="font-semibold tracking-tighter">Shopping list</h1>
                  <button onClick={handleMark}><i className="fa-solid fa-pen"></i></button>
                </div>

                <div className="space-y-1">
                  <h1 className="text-[#828282] text-[12px] tracking-wide">
                    Fruits & Vegetables
                  </h1>

                  {cartItems.map((item, i) => {
                    if (item.category === "fruits and vegetables"){
                      return (
                        <ItemInCart key={i} name={item.name} itemObj={item} />
                      )
                    }
                  })}
                </div>

                <div className="space-y-1">
                  <h1 className="text-[#828282] text-[12px] tracking-wide">
                    Meat a Fish
                  </h1>

                  {cartItems.map((item, i) => {
                    if (item.category === "meat and fish"){
                      return (
                        <ItemInCart key={i} name={item.name} itemObj={item} />
                      )
                    }
                  })}
                </div>

                <div className="space-y-1">
                  <h1 className="text-[#828282] text-[12px] tracking-wide">
                    Beverages
                  </h1>
                  
                  {cartItems.map((item, i) => {
                    if (item.category === "beverages"){
                      return (
                        <ItemInCart key={i} name={item.name} itemObj={item} />
                      )
                    }
                  })}
                </div>

                <div className="space-y-1">
                  <h1 className="text-[#828282] text-[12px] tracking-wide">
                    Pets
                  </h1>

                  {cartItems.map((item, i) => {
                    if (item.category === "pets"){
                      return (
                      <ItemInCart key={i} name={item.name} itemObj={item} />
                      )
                    }
                  })}
                </div>

            </article>}
          </div>

          <section className='w-full absolute bottom-0 right-0 '>
            <div className="sticky w-full h-full top-0">
            {cartItems.length === 0 && <img src="/undraw_shopping_app_flsj 1.svg" className='w-1/2 mx-auto' alt="" />}
              {mark === false 
              ? 
              <article className=' bg-white px-5 py-4'>

                <div className={` ${cartItems.length > 0 && 'border-[#F9A109]'} flex border rounded-lg h-12`}>
                    <input 
                        type="text" 
                        className='px-1 border-[#C1C1C4] rounded-l-lg h-full w-4/5' 
                        value={name}
                        onChange={(e) => setName(e.target.value) }
                        placeholder='Enter a name' 
                    />
                     <button 
                        className={`capitalize text-white rounded-lg h-full md:w-2/5 w-1/5  ${cartItems.length > 0 ? 'bg-[#F9A109]' : 'bg-[#C1C1C4]'}`}>
                      save
                    </button>
                </div>
              </article> 
              : 
              <div className="tex-center flex justify-center p-4 items-center space-x-5 ">
                    <button onClick={addCancelPopUp} className="inline-block font-semibold">Cancel</button>
                    <button className="inline-block p-2 rounded-lg text-white bg-[#56CCF2] text-sm">Complete</button>
              </div>}
            </div>
              
          </section>
      </aside>

       : 
      
      <form className="md:w-[30%] min-h-screen w-full px-4 py-6 space-y-4 flex flex-col justify-between">
      <h1 className="text-xl ">
          Add a new Item
      </h1>

      <div className="space-y-3">
          <div className="space-y-1">
              <label htmlFor="name" className="text-sm">Name</label>
              <input 
                      type="text" 
                      name="" 
                      id="name" 
                      className="border px-2 border-[#BDBDBD] h-10 w-full rounded-lg" 
              />
          </div>

          <div className="space-y-1">
              <label htmlFor="note" className="text-sm">Note (Optional)</label>
              <textarea 
                      name="" 
                      id="" 
                      cols="30" rows="10" 
                      className="border px-2 border-[#BDBDBD] h-32 w-full rounded-lg">
              </textarea>
          </div>

          <div className="space-y-1">
              <label htmlFor="image" className="text-sm">Image (Optional)</label>
              <input 
                      type="url" 
                      name="" 
                      id="image" 
                      className="border px-2 border-[#BDBDBD] h-10 w-full rounded-lg" 
              />
          </div>

          <div className="space-y-1">
              <label htmlFor="category" className="text-sm">Category</label>
              <select name="category" id="categry" className="border border-[#BDBDBD] h-10 w-full rounded-lg text-sm">
                  <option value="">Enter a Category</option>
                  <option value="Fruit & vegetables">Fruit & vegetables</option>
                  <option value="Meat & Fish">Meat & Fish</option>
                  <option value="Beverages">Beverages</option>
              </select>
          </div>
      </div>

      <div className="tex-center flex justify-center items-center space-x-5 ">
          <button onClick={handleRemoveForm} className="inline-block font-semibold">Cancel</button>
          <button className="inline-block p-2 rounded-lg text-white bg-[#F9A109]">Save</button>
      </div>
  </form>}
  </>
    )
}