import React, {useState} from "react";
import styles from './css/App.module.css';
import Form from "./components/Form"
import Results from "./components/Results"

function App() {
  const [state, setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    conPassword:"",
  })
  console.log(state)
  
  return (
    <div className={ styles.app }>
      <Form inputs={state} setInputs={setState} />
      <Results data={state} />
    </div>
  );
}

export default App;
