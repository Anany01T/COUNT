import { useState } from 'react';
import './App.css';


function App() {
  var [count,setCount] = useState(0);

  function increase()
  {
    setCount(count+1);
  }
  function decrease()
  {
    setCount(count-1);
  }
  return (
    <div className='container'>
      <h1 className='llp'>{count}</h1>
      <button class="btn btn-outline-primary" className='llpp' onClick={decrease}> - </button>
      <button class="btn btn-outline-primary" className='llpp' onClick={increase}> + </button>
    </div>
  );
}
export default App;
