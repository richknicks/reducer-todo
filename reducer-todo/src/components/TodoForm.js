import React, { useState, useReducer } from "react";
import { Reducer, initialState } from "../reducers/Reducer";


const TodoForm = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    console.log("The State",state, dispatch);
    const [newTitleText, setNewTitleText] = useState('');
    const handleChanges = e => {
        setNewTitleText(e.target.value);
      };
      const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_TASK', payload: newTitleText})
        console.log(state)
    }
      const handleClear = e => {
        e.preventDefault();
        dispatch({type: "CLEAR_COMPLETED", payload: newTitleText});
    }
      
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label htmlFor="todoItems"><span>Enter Item Here: </span> 
              <input type="text" id="todoItems" name="newTitleText" value={newTitleText} onChange={handleChanges}/>
              <button type="submit" onClick={()=>{
                  dispatch({ type: 'UPDATE_TODO', payload: newTitleText });
              }}>Add</button>
              
          </label>
      </form>
      {state.map(item=> <p onClick={() => dispatch({ type: 'TOGGLE_COMPLETED' })}>{item.task}</p>)}
      
    </div>
  );
};


export default TodoForm;
