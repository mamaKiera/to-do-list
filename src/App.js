import React, { useState } from 'react'
import './index.css'
import ToDoCard from './ToDoCard'

const initTodo = [
  { id: 1, todo: 'learn React', isDone: false },
  { id: 2, todo: 'learn JS', isDone: false },
]

function App() {
  const [todos, setNewTodos] = useState(initTodo)
  const [newTodoItem, setNewTodoItem] = useState('') //value from input form

  const handleSubmit = (e) => {
    e.preventDefault()

    setNewTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 100),
        todo: newTodoItem,
        isDone: false,
      },
    ])
    setNewTodoItem('')
  }

  const toggleTask = (index) => {
    const copyCurrentTask = [...todos] // go ask why need to spread again

    copyCurrentTask[index].isDone = !copyCurrentTask[index].isDone
    setNewTodos(copyCurrentTask)
  }

  const deleteTask = (index) => {
    const copyCurrentTask = [...todos]

    copyCurrentTask.splice(index, 1)
    setNewTodos(copyCurrentTask)
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8 mb-8">
          <label className="font-bold mt-6">My To Do List</label>
          <div className="flex">
            <input
              type="text"
              name="to-do"
              id="to-do"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Please input your todo"
              value={newTodoItem} //bind null value back to input form
              onChange={(e) => setNewTodoItem(e.target.value)}
            />
            <button type="submit" className="rounded-lg bg-indigo-200 text-sm p-2">
              Submit
            </button>
          </div>
        </form>
        <div>
          {todos.map((todo, index) => {
            return <ToDoCard key={todo.id} index={index} todo={todo} toggleTask={toggleTask} deleteTask={deleteTask} /> //send toggleTask over to ToDoCard
          })}
        </div>
      </div>
    </>
  )
}

export default App
