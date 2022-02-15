import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () =>{
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
