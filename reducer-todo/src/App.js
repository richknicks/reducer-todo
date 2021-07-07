import React, { useReducer } from 'react';
import Form from './components/Form';
import { initialState, reducer } from './reducer/index';
import Display from './components/Display';
import './App.css';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const addToDo = (e, todo) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
  }
  const tCo = id => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }
  const fTo = () => {
    dispatch({ type: "FILTER_TODO" });
  }




  return (
    <div className="App">
      <Form addToDo={addToDo}/>
      <Display toggle={tCo} todos={state.todos}/>
      <button onClick={fTo}>Delete</button>
    </div>
  );
}

export default App;
