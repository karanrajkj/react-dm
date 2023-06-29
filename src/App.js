import React, {useState, useRef, useEffect} from "react";
import "./style.css";

export default function App(){
  const [msg, setMsg] = useState('Type Text')
  const [flag, setFlag] = useState()
  const [count, setCount] = useState(0)
  const counter = useRef(0)

  useEffect(() => {
    counter.current = count;
  });

  return (
    <div>
      <h2>Two way binding in react</h2>
      <input type='text' onChange={e => setMsg(e.target.value)}/><br/>
      <label>{msg}</label>
      <hr/>
      <h2>Show/Hide text on click</h2>
      <a href='#' onClick={e => setFlag(!flag)}>Click me</a><br/>
      {flag && <label>Link Clicked</label>}
      <hr/>
      <h2>Counter</h2>
      <button onClick={() => setCount(counter.current-1)}>-</button>
      {/* <label>{count}</label> */}
      <input type='text' value={counter.current}/>
      <button onClick={() => setCount(counter.current+1)}>+</button>
    </div>
  );
}