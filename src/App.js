import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './index.css'
import { useState } from 'react'

const App = () => {
  const [showNewTaskForm, setShowNewTaskForm] = useState(false)
  const [tasks, setTasks] = useState([
    { 
        id: 1, 
        name: 'Teezee drops an album', 
        day: 'February 5th' ,
        reminder: true
    },
    { 
        id: 2, 
        name: 'Subaru Boys Unlimited Release Day', 
        day: 'March 4th' ,
        reminder: false
    },
    { 
        id: 3, 
        name: 'Donda Release Day', 
        day: 'February 22nd' ,
        reminder: true
    },
])

  const deleteTasks = (id) => {
    // since you can't actually delete the state(task)
    // we will just filter out the tasks that was "deleted"
    setTasks(
      tasks.filter(task => task.id !== id)
    )
    console.log('deleted', id)
  }
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ... task};
    setTasks([...tasks, newTask]);
    console.log('added', task)
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map(task => task.id === id ? {...task, reminder : !task.reminder} : task))
    console.log()
  }
  const toggleNewTaskForm = () => {
    setShowNewTaskForm(prevState => !prevState)
  }
  return (
    <div className='container'>
      <Header title="Task Tracker" showForm={toggleNewTaskForm} formIsOpen={showNewTaskForm}/>
      {showNewTaskForm && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks}  handleDelete={deleteTasks} toggleReminder={toggleReminder}/> : 'No Tasks Available'}
      
    </div>
  )
}

export default App