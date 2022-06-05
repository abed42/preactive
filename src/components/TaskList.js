import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewTaskForm from "./NewTaskForm";

const TaskList = () => {

    fetch()

const [tasks, setTasks] =  useState([
    {title: 'homework', id: 1}, 
    {title: 'workout', id: 2},
    {title: 'mediteta for 5 mins', id: 3},
    {title: 'read for 30 mins', id: 4},
    {title: 'issue an invoice', id: 5}
]);

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
                {tasks.map( task => {
                return (  <li key={task.id} >  {task.title} <span onClick={()=> removeTask(task.id)} style={{color :'red', marginLeft: '20px'}}>x</span> </li>  )
                })}
            </ul> 
        
            <NewTaskForm  addTaskProp={addTask}/>
        </div>
    );
}

export default TaskList;