import {FaTimes} from 'react-icons/fa'
const Task = ({task, handleDelete, toggleReminder}) => {
    const handleTaskClick = (id) => {
        toggleReminder(id)
    }
// waste of time
//  You are calling two function
    // const deleteTask = (id) => {
    //     handleDelete(id)
    // }
  return (
    <div className={`tasks ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => handleTaskClick(task.id)}>
        <h3 key={task.id}> 
            {task.name}  
            {/* setting onClick to fire a function because a parameter is required in the onDelete file */}
            <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={() => handleDelete(task.id)} />
            </h3> 
        <p>{task.day}</p>
    </div>
  )
}


export default Task
