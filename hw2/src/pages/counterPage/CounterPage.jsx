import React from 'react'
import {useDispatch, useSelector} from "react-redux"

const CounterPage = () => {

    const dispatch = useDispatch()

    const { result } = useSelector(state => state)

    const firstNumber = (e) =>{
        dispatch({
            type:"FIRST_NUMBER",
            payload: e.target.value
        })
    }

    const secondNumber = (e) =>{
        dispatch({
            type:"SECOND_NUMBER",
            payload: e.target.value
        })
    }

    const plus = () =>{
        dispatch({
            type: "PLUS"
        })
    } 

    const minus = () =>{
        dispatch({
            type: "MINUS"
        })
    }

    const multi = () =>{
        dispatch({
            type: "MULTI"
        })
    }

    const divis = () =>{
        dispatch({
            type:"DIVIS"
        })
    }




  return (
    <>
        <input 
            type="number" 
            onChange={firstNumber} 
            placeholder='first number' 
        />
        <input 
            type="number" 
            onChange={secondNumber} 
            placeholder='second number' 
        />
        <br />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <br />
        <button onClick={multi}>*</button>
        <button onClick={divis}>/</button>
        <h1>{result}</h1>
    </>
  )
}

export default CounterPage