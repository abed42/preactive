import { useState } from "react";

const NewTaskForm = ({addTaskProp}) => {

    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addTaskProp(title)
        
        setTitle('')
    }
// console.log(title)
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Task : </label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value) } required/>
            <input type='submit' value='add task' />
        </form>
    );
}
 
export default NewTaskForm;