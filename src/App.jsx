import React, { useState } from "react";
import To from "./Todolist";

function App() {
  const [a, b] = useState("");
  const [c, d] = useState([]);
  function l(event) {
    const p = event.target.value;
    b(p);
  }
  function k() {
    d((x) => {
      return [...x, a];
    });
    b("");
  }
  function de(id) {
    d(x=>{
      return x.filter((a,index)=>{
        return index!==id
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={l} type="text" value={a}/>
        <button onClick={k}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {c.map((i, index) => (
            <To text={i} key={index} id={index} onClicked={de} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
