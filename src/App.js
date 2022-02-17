import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNew, checkbox, UpDate, delet } from "./redux/Addtask";

function App() {
  const [input, setinput] = useState("");
  const [Update, setUpdate] = useState("");
  const dispatch = useDispatch();
  const {task } = useSelector((state) => state);
  //  {task} = state.task
  return (
    <div className="App">
      <div>
        <input type="text" onChange={(e) => setinput(e.target.value)} />
        <button
          onClick={() =>
            dispatch(addNew({ text: input, done: false, id: Math.random() }))
          }
        >
          {" "}
          Add New Task{" "}
        </button>
      </div>
      <div>
        <h1> Task Not Done yet</h1>
        {/* el.done===false=!el.done */}
        {task.filter(el=>!el.done).map((el) => (
          <div>
            <input type='checkbox' onClick={()=>dispatch(checkbox(el.id))} />
            <span> {el.text} </span>
            <input type='text' value={Update} onChange={(e) => setUpdate(e.target.value)}/>
            <button onClick={()=>{ 
              dispatch(UpDate(el.id,Update))
              setUpdate("")}}> Edit Task  </button>
          </div>
        ))}
      </div>
      <div>
        <h1> Task Done </h1>
        {task.filter(el=>el.done).map((el) => (
          <div>
             <input type='checkbox' onClick={()=>dispatch(checkbox(el.id))} />
            <span style={{textDecoration:"line-through"}}> {el.text} </span>
            <button onClick={()=>dispatch(delet(el.id))}> DELETE </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;