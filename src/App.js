import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setshowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5 at 2.30 pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting At School',
      day: 'Feb 7 at 10.00 am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Shopping',
      day: 'Feb 5 at 6.30pm',
      reminder: false,
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1;
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Header onAdd = {() => setshowAddTask(!showAddTask)} showAdd = {showAddTask}/>
          {showAddTask && <AddTask onAdd = {addTask}/>}
          {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <h6 className="alert alert-danger text-center">No Task To Show</h6>}
        </div>
      </div>
    </div>


  );
}

export default App;
