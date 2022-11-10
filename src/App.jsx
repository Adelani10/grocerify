import {Routes, Route} from "react-router-dom"
import Home from './pages/home'
import Stats from './pages/stats'
import History from './pages/history'
import Aside from './pages/aside'
import Beside from "./pages/beside"
import { useContext, useEffect, useState } from "react"
import { AddContext } from "./context"
import CancelList from "./components/cancelList"
import Nav from "./components/nav"





function App() {
  const {cancelListPopUp} = useContext(AddContext)

  return (
    <div className="container relative h-screen overflow-y-scroll md:overflow-y-clip mx-auto flex border bg-[#FAFAFE]">

      {cancelListPopUp && <div className='overlay absolute right-0 left-0 bottom-0 top-0 z-40'></div>}

      <Nav/>
      <CancelList/>
      <section className="w-[85%] md:w-full flex flex-col md:flex-row">
          <main className=" md:w-[70%] w-full h-full  md:inline-block">
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
