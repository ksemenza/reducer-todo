import React from 'react';

const ToDoForm = ( { handleSubmit, handleChanges, todoInput }) => {
   //const [todoInput, setTodoInput] = useState('');

   /*const handleChanges = e => {
       setTodoInput(e.target.value);
   }
   */
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='title-input'>
            <label htmlFor='todo'>New Task</label>
            <input name='todo'
                id='todo'
                value={todoInput}
                onChange={handleChanges}
                placeholder='What do you need to'
                >
                </input>
                </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ToDoForm;

