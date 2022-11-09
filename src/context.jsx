import React, {useState} from "react";
import {data} from './data'

const AddContext = React.createContext()

function Context (props) {
    const [showForm, setShowForm] = useState(false)  
    const [allItems, setAllItems] = useState(data)
    const [cartItems, setCartItems] = useState([])
    const [mark,  setMark] = useState(false)
    const [cancelListPopUp, setCancelListPopUp] = useState(false)

    function handleMark () {
        setMark(!mark)
    }

    function removeMark() {
        setMark(false)
    }

    function emptyCart () {
        setCartItems([])
    }

    function handleRemoveForm () {
        setShowForm (!showForm)
    }


    function increaseCount (id) {
        const newCartArr = cartItems.map(item => {
            if (id === item.id){
                return {...item, count: item.count + 1}
            }
            return item
        })
        setCartItems(newCartArr)
    }

    function reduceCount (id) {
        const newCartArr = cartItems.map(item => {
            if (id === item.id){
                return {...item, count: item.count - 1}
            }
            return item
        })
        setCartItems(newCartArr)
    }

    function addToCart (newItem, id) {
        const newAllItems = allItems.map(item => {
            if(id === item.id){
                return {...item, count: item.count + 1}
            }
            return item
        })
        setAllItems(newAllItems)

        setCartItems(prev => {
            return [...prev, newItem]
        })
    }

    function removeFromCart (id) {
        const newItem = cartItems.filter(item => {
            if (id !== item.id) {
                return item
            }
        })
        setCartItems(newItem)
    }

    function addCancelPopUp () {
        setCancelListPopUp(true)
    }

    function removeCancelPopUp () {
        setCancelListPopUp(false)
    }

    return (
        <AddContext.Provider value={{
            showForm, 
            handleRemoveForm,
            allItems,
            addToCart,
            cartItems,
            increaseCount,
            reduceCount,
            removeFromCart,
            mark, 
            handleMark,
            cancelListPopUp,
            addCancelPopUp,
            removeCancelPopUp,
            emptyCart,
            removeMark
        }}>
            {props.children}
        </AddContext.Provider>
    )
}

export {Context, AddContext}