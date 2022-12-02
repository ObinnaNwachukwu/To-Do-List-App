import { useState } from 'react'
import './App.css'
import { MdDeleteOutline } from "react-icons/md";

function App() {

  const [state, setState] = useState(" ");
  const [todo, setTodo] = useState(["Mumsy's Birthday", "Johnny's Wedding"])

  const handleClick = () => {
    setTodo((curr) => ([...curr, state]))
    setState(" ")
  }

  const deleteItem = (val) => {
    const newArray = todo.filter((list) => list !== val);
    console.log(newArray)
    setTodo(newArray);
  }
  return (
    <div className='Main'>
      <div className="App">
        <h1 className='Head3'>TodoApp</h1>
        <p className='p1'>CodewithObi</p>
        <div className='Bars'>
          <input className='input' onChange={(e) => setState(e.target.value)} type='text' placeholder='Add your new todo'></input>
          <button className='but' onClick={handleClick}>+</button>
        </div>
        {
          todo?.map((item) => (
            <div className='input1'>
              <div className='pr'>
                <p className='p2'>{item}</p>
              </div>
              <div className="d1" onClick={() => { deleteItem(item) }}><MdDeleteOutline /></div>
            </div>
          ))
        }
      </div>
    </div>
  )

}

export default App
