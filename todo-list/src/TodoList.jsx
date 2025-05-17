import React from 'react'
import './TodoList.css'


const TodoList = () => {

    const [todos, setTodos] = React.useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Learn JavaScript', completed: false },
        { id: 3, text: 'Learn CSS', completed: false },
    ]);
    const [newTodo, setNewTodo] = React.useState('');


   
    const addNewTodo = () => {
        if (newTodo.trim() === '') {
            return;
        }
        const newTodoItem = {
            id: todos.length + 1,
            text: newTodo,
            completed: false
        };
        setTodos([...todos, newTodoItem]);
        setNewTodo('');
    }

    const handleInput = (e) => {
        setNewTodo(e.target.value);
    }

    const handleCheck = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const handleDelete = (id) => {
        // console.log("delete");
        // console.log(id)
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

  return (
    <>
    <h1>Todo List</h1>
    <input type="text" placeholder='Add a new task' className='input-todo' value={newTodo} onChange={handleInput} />
    <button onClick={()=>addNewTodo()}>Add</button>

    <ul className='todo-list'>
        {todos.map(todo => (
            <li key={todo.id} className='todo-item'>
                <input  type="checkbox" checked={todo.completed} onChange={()=>handleCheck(todo.id)}/>
                <span 
                onClick={() => handleCheck(todo.id)} 
                style={
                    todo.completed ? { textDecoration: 'line-through', color: 'green' } : { textDecoration: 'none', color: 'white' }
                }>{todo.text}</span>
                <button className='delete-btn' onClick={() => handleDelete(todo.id)}>Delete</button>
                {todo.completed ? <button onClick={()=>handleCheck(todo.id)}>Mark as Incomplete</button> : <button onClick={()=>handleCheck(todo.id)}>Mark as Complete</button>}
            </li>
        ))}
    </ul>

    </>
    
  )
}

export default TodoList     