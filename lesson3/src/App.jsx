import './App.css';
import React from "react";
import { Card } from './components/Card/Card';
import ClassComponent from './components/Card/Card';

function App() {
  return (
    <>
      <div className="App">
        123
      </div>
      <NewComponent/>
      <NewComponent/>
      <NewComponent/>
      <ClassComponent/>
      <ClassComponent/>
      <ClassComponent/>
    </>

  );
}


const NewComponent = () => {
  return (<div>
    Книжный киоск
  </div>)
}



export default App;
