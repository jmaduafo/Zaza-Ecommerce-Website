import React from 'react'
import './counter.css'

function Counter({setCounter, counter}) {
  return (
    <div className='counter'>
        <div style={{ cursor: counter === 1 ? 'not-allowed' : 'pointer', opacity: counter === 1 ? .4 : 1 }} onClick={() => counter === 1 ? setCounter(1) : setCounter((prev) => prev - 1)}><p>-</p></div>
        <div className='line'></div>
        <div><p>{counter}</p></div>
        <div className='line'></div>
        <div onClick={() => setCounter((prev) => prev + 1)}><p>+</p></div>
    </div>
  )
}

export default Counter