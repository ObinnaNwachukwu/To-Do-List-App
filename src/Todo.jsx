import { useState } from "react";


function App() {

    const [state, setState] = useState("")
    const [todo, SetTodo] = useState(["first to-do", "second to-do"])

    const handleClick = () {
        SetTodo((curr) => ([...curr, state]))
    }
    return (
        <div className="app">
            <div className="card" style={{ color: "white" }}>
                <div className="input-part">
              <input onChange={(e)=> setState(e.target.value)} type='text' placeholder="add to-do"/>
              <button onClick={handleClick}>add</button>








                </div>
            </div>
        </div>
    )


















}