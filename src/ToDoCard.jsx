import React from 'react'

const ToDoCard = (props) => {
  const { todo, index, toggleTask, deleteTask } = props

  return (
    <div className="text-center flex justify-between w-60 m-1">
      <li className={todo.isDone ? 'line-through' : ''} onClick={() => toggleTask(index)}>
        {todo.todo}
      </li>
      <button onClick={() => deleteTask(index)} type="submit" className="rounded-lg bg-red-300 text-sm p-2">
        Delete
      </button>
    </div>
  )
}

export default ToDoCard
