import React from 'react';

const ToDoForm = ( { handleSubmit, handleChanges, todoInput }) => {
   //const [todoInput, setTodoInput] = useState('');

   /*const handleChanges = e => {
       setTodoInput(e.target.value);
   }
   */
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>Add Guitar Lessons</label>
            <input name='todo'
                id='todo'
                value={todoInput}
                onChange={handleChanges}
                >
            </input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ToDoForm;

