import React, {useReducer, useState} from 'react';
import logo from './img/g-round.png';
import './App.css';
import ToDos from './components/ToDos';
import ToDoForm from './components/ToDoForm';
import guitar from './img/g-icon.jpg'
import moment from 'moment';
import { reducer, initialState } from './reducers/reducer'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const today = moment();
  const [todoInput, setTodoInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('in handleSubmit');
    dispatch({type: 'ADD', payload: e.target.todo.value});
    setTodoInput('');
  }

  const handleChanges = e => {
    setTodoInput(e.target.value);
  }

  //Toggle Func
  const toggleCompleted = (event, id) => {
    event.target.classList.toggle('completed');
    dispatch({type: 'TOGGLE', payload: id});
    const todoEl = document.getElementById(id);

    //Remove guitar and date if present
    const guitarEl = document.getElementById(`guitar${id}`);
    const timeEl = document.getElementById(`time${id}`);
    if (guitarEl) {
      todoEl.removeChild(guitarEl);
    }
    if (timeEl) {
      todoEl.removeChild(timeEl);
    }
    // Otherwise, add guitar and date completed
    if (event.target.classList.contains('completed')) {
      
      const node = document.createElement('img');
      node.classList.add('guitar');
      node.id = `guitar${id}`;
      node.src = guitar;
      todoEl.prepend(node);
      const timeStamp = today.format('ddd MMMM DD YYYY h:mm a')
      const timeNode = document.createElement('p');
      timeNode.id = `time${id}`;
      timeNode.textContent= `${timeStamp}`;  
      todoEl.prepend(timeNode);
    }
  }

  

  const clearCompleted = () => {
    dispatch({type: 'CLEAR'});
  }

  return (
    <div className="App">
              <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">        
        <h1>
        Todo Check List
        </h1>
        <h2>{today.format(`dddd`)}</h2>
        <h2>{today.format(`MMMM Do YYYY`)}</h2>
        <h2>{today.format(`h:mm a`)}</h2>

      </header>
   
      <ToDoForm handleSubmit={handleSubmit} handleChanges={handleChanges} todoInput={todoInput} />

      <ToDos todos={state} toggleCompleted={toggleCompleted}/>

      <h4 className='clear-title'>(click task to mark as complete)</h4>
      <button className='clear-btn' onClick={clearCompleted}>Clear</button>
    
  <br/>
  <br/>
  <br/>
  <br/>
  <h6>  © Guin Dev Productions ~ Developer: Kim Semenza</h6>
    </div>
  );
}

export default App;