export const initialState = {
    todos: [
        {
            task: 'Learn about reducers',
            completed: false,
            id: 3892987589
          },
        {
            task: "do Dishes",
            completed: true,
            id: 345424
        }
    ]
};

export function reducer(state, action){
    console.log("i'm action from reducer", action)
    switch(action.type) {
        case "TOGGLE_TODO":
            return  {
                ...state,
                todos: state.todos.map(i => {
                    if(i.id === action.payload){
                        return {
                            task: i.task,
                            completed: !i.completed,
                            id: i.id
                        }
                    } else {
                        return i;
                    }
                })
            }
        case "FILTER_TODO":
            return {
                ...state,
                todos: state.todos.filter(i => !i.completed)
            }
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        task: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            }    

        default:
            return state;
    }
}