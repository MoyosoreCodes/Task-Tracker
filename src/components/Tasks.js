import Task from './Task'
import PropTypes from 'prop-types'


const Tasks = ({tasks, handleDelete, toggleReminder}) => {
  return (
    <div >
        {tasks.map(task => 
            ( <Task key={task.id} 
                task={task} 
                handleDelete={handleDelete}
                toggleReminder={toggleReminder}/> ))
        }         
    </div>
  )
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
}

export default Tasks
