import React,{useState} from 'react';
import './App.css';

function App() {
  const[count, setCount] = useState(0);
  return (
    <div className="App">
      
        <h1>counter App</h1>
      
      <div className='text'>
        <h2 className='count'>{count}</h2>
        <button onClick={()=> setCount(count + 1)} >Increment</button>
        <button onClick={()=> setCount(count - 1)} disabled={count === 0}>Decrement</button>
        <button onClick={()=> setCount(0)}disabled={count === 0}>Reset</button>
      </div>
      
    </div>
  );
}

export default App;
