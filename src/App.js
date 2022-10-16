// import logo from './logo.svg';
import './App.css';
import { Project } from "./components/project"
import { useState } from "react"

function App() {

  const [numClics , setnumClics] = useState(0);

  const update_link = () => {
    console.log("Hello")
  }

  const aumentar = () => {
    setnumClics(numClics + 1);
  }
  

  return (
    <div className="App">
      <div className='main-container'>
        <h1>My Projects:</h1>
        <Project
          title="Bayesian Data Analysis"
          desc="A Nice project about bayesian data Analysis"
          img="bayes1"
          date="2020-10-10"
          isImportant={false}
          update_link={update_link}
        />
      </div>
    </div>
  );
}

export default App;
