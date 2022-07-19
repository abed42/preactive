import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { useState, useContext, useEffect} from "react";
let apiKey = 'hfdjklsjfkdslf1345432'
import './App.css';

import TaskList from './components/TaskList';
import {ThemeContext} from "./contexts/Theme-context"
import ThemeContextProvider from "./contexts/Theme-context";
// import AvoidTaskList from './components/AvoidTaskList';




function App() {
  // const theme = useContext(ThemeContext);
fetch('http://localhost:8080/do')
.then(response => response.json())
.then(data => console.log(data))

  const [doTasks, setDoTasks] =  useState([
    {title: 'homework', id: 1}, 
    {title: 'workout', id: 2},
    {title: 'mediteta for 5 mins', id: 3},
    {title: 'read for 30 mins', id: 4},
    {title: 'issue an invoice', id: 5}
]);

const [avoidTasks, setAvoidTasks] =  useState([
    {title: 'endless scrolling', id: 1}, 
    {title: 'drugs', id: 2},
    {title: 'watching the news ', id: 3},
    {title: 'social media', id: 4},
    {title: 'junk food', id: 5}
]);

  return (
    <BrowserRouter>

   
            <div className="App" >
              <header >
                <h1>p:reac:tive</h1> 
                <ul>
                  <li>
                    <Link className="link" to="/do">Tasks to do</Link>
                  </li>
                  <li>
                    <Link className="link" to="/avoid">Tasks to avoid</Link>
                  </li>
                </ul>
              </header>
              
              <Routes>
                <Route path="/do" element={<TaskList todo={true} tasks={doTasks} setTasks={setDoTasks} />} />         
                <Route path="/avoid" element={<TaskList todo={false} tasks={avoidTasks}  setTasks={setAvoidTasks} />}/>
              </Routes>
            </div>

    </BrowserRouter>
  );
}

export default App;
