import React from "react";

export const initialState =[
    {
      task:'',
      id:Date.now(),
      completed: false
    }];

  export const Reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TASK':
            return [...state, {item: action.payload, completed:false, id:Date.now(),task:''}]
        case 'TOGGLE_COMPLETED':
            return state.map((item)=>{
            if(item.id===action.payload){
            return {
            ...state,
        completed: !state.completed
    }
} return item
})
    case 'CLEAR_COMPLETED':
        return state.filter(item=>item.completed !==true)
    case 'UPDATE_TODO':
    return[
        ...state,{
        task: action.payload,
        id:Date.now(),
        completed: false}
    ]
    default: return state;
  }};
  


