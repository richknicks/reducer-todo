import React, { useState } from 'react';
import useForm from '../hooks/useForm';

export default function Form({ addToDo }){
    const [ form, setForm, onChange ] = useForm();

    const handleSubmit = (e, todo) => {
        addToDo(e, todo)
        setForm('')
    }

    return (
        <form onSubmit={(e) => handleSubmit(e, form)}>
            <label>new todo</label>
                <input 
                onChange={onChange} 
                value={form} 
                id='form' 
                name="form" 
                placeholder="I'm a new todo" />

            <button type="submit">submit</button>
            
        </form>
    )
}