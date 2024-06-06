import React from 'react';
import "./App.css";
import MainComp from "./components/maincomp";
import TodoList from './components/Todolist';
import UploadImg from './components/uploadImg';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>TODO</h1>
          <MainComp />
          <TodoList />
          <UploadImg/>
        </div>
      </header>
    </div>
  );
}

export default App;
