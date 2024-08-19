import React, { useReducer, useState } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT': return {
            ...state,
            count:state.count -1
        }
    }
}
const UseReducer = () => {
  
    // const [first, setfirst] = useState("")
    const [counter, dispatch] = useReducer(reducer, { count: 0 })
    console.log(useReducer())
    const handleIncrement = ()=>{
        dispatch({type: 'INCREMENT'})
    }
    const handleDecrement = ()=>{
        dispatch({type: 'DECREMENT'})
    }
    return (
        <div className="h-lvh p-4 font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
            <h1>{counter.count}</h1>
            <button onClick={(e)=>handleIncrement(e)}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default UseReducer
