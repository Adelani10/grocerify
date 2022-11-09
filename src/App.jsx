import {Routes, Route} from "react-router-dom"
import { Link } from 'react-router-dom'
import Home from './pages/home'
import Stats from './pages/stats'
import History from './pages/history'
import Aside from './pages/aside'
import Beside from "./pages/beside"
import { useContext, useEffect, useState } from "react"
import { AddContext } from "./context"
import CancelList from "./components/cancelList"





function App() {

  

  const {cartItems, cancelListPopUp} = useContext(AddContext)

  return (
    <div className="container relative md:h-screen mx-auto flex border bg-[#FAFAFE]">

      {cancelListPopUp && <div className='overlay absolute right-0 left-0 bottom-0 top-0 z-40'></div>}


      <nav className='bg-[#FFFFFF] md:w-[8%] w-[15%] h-screen sticky bottom-0 left-0 top-0 flex flex-col justify-between items-center py-12 md:py-6'>

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

      <CancelList/>

      <section className="w-[85%] md:w-full flex flex-col md:flex-row">
          <main className="md:p-10 md:w-[70%] w-full md:inline-block">
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/history' element={<History/>}/>
                <Route exact path='/stats' element={<Stats/>}/>
                <Route exact path='/aside' element={<Aside/>}/>
            </Routes>
          </main>

          <Beside/>
      </section>

    </div>
  )
}

export default App
