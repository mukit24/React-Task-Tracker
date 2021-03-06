import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [showAddTask, setshowAddTask] = useState(false);

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }

    getTasks()
  }, [])

  const api = 'http://localhost:5000/tasks'

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(api)
    const data = await res.json();

    return data
  }

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`${api}/${id}`)
    const data = await res.json();

    return data
  }


  // Add Task
  const addTask = async (task) => {
    const res = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random()*10000)+1;
    // const newTask = {id,...task}
    // setTasks([...tasks,newTask])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`${api}/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`${api}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <Header onAdd={() => setshowAddTask(!showAddTask)} showAdd={showAddTask} />

            <Routes>
              
              <Route path="/" element={<>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <h6 className="alert alert-danger text-center">No Task To Show</h6>}</>} />

              <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
