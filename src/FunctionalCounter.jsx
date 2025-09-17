import { useState } from 'react'
import './App.css'

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>{count}</p>
      <div className='button-container'>
        <button className='incrementButton' onClick={() => incrementCount()}>+</button>
        <button className='decrementButton' onClick={() => decrementCount()}>-</button>
      </div>
    </div>
  )
}

export default FunctionalCounter
