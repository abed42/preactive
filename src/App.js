import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";


import './App.css';

import TaskList from './components/TaskList';
import AvoidTaskList from './components/AvoidTaskList';




function App() {
  return (
    <BrowserRouter>
    <>

      <div className="App">
        <header className="App-header">
          <h1>p:reac:tive</h1> 
          <ul>
            <li>
              <Link to="/do">Tasks to do</Link>
            </li>
            <li>
              <Link to="/avoid">Tasks to avoid</Link>
            </li>
          </ul>
        </header>
         
        <Routes>
          <Route path="/do" element={<TaskList />} />         
          <Route path="/avoid" element={<AvoidTaskList  />} />
        </Routes>
      </div>
    </>
    </BrowserRouter>
  );
}

export default App;




  {/* <nav>
          <ul>
            <li>
              <Link to="/do">Tasks to do</Link>
            </li>
            <li>
              <Link to="/avoid">Tasks to avoid</Link>
            </li>
          </ul>
        </nav> */}
       