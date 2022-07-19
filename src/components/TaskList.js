import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewTaskForm from "./NewTaskForm";
import {ThemeContext} from "../contexts/Theme-context"

const TaskList = ({todo, tasks, setTasks}) => {

const theme = useContext(ThemeContext);

console.log(theme)

const addTask = (title) => setTasks([...tasks, {title, id: uuidv4()}]);

const removeTask = (id) => setTasks(tasks.filter(task => task.id !== id ));

    return (  
        <div>

            <ul>
            {tasks.length <= 0 &&
                <h2>
                nothing to do ! you've done everything (or nothing).
                </h2>
            }
                { todo ? <h2>your things to do:</h2> : <h2>your things to avoid</h2>}

                {tasks.map( task => {
                return (  <li key={task.id} >  {task.title} <span onClick={()=> removeTask(task.id)} style={{color :'red', marginLeft: '20px'}}>x</span> </li>  )
                })}
            </ul> 
        
            <NewTaskForm  addTaskProp={addTask}/>
        </div>
    );
}

export default TaskList;