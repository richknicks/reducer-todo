import React, {useState, useReducer} from 'react'
import {initialState, Reducer} from '../reducers/Reducer'
import Todo from './Todo'
const TodoForm = () => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const [newTodo, setNewTodo] = useState("")
    const handleChanges = e => {
        setNewTodo(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', payload: newTodo})
        console.log(state)
    }
    const handleClear = e => {
        e.preventDefault();
        dispatch({type: "CLEAR", payload: newTodo});
    }
        return (
            <div>
                <form>
                    <input
                    type="text"
                    placeholder="Add Todo"
                    name="newTodo"
                    id='newTodo'
                    value={newTodo}
                    onChange={handleChanges}></input>
                    <button
                    type="submit"
                    onClick={handleSubmit}>Add</button>
                    <button
                    type="submit"
                    onClick={handleClear}>Clear Completed</button>
                </form>
             <Todo 
             state={state}
             dispatch={dispatch}
             id={state.id} 
             newTodo={newTodo}/>
            </div>
        )
}
export default TodoForm