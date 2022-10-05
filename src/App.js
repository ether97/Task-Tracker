import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [add, setAdd] = useState(false)
  const [tasks,setTasks] = useState([
    {   
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    }, 
    {   
        id: 2,
        text: 'Meeting At School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    }, 
    {   
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }, 
]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" add={add} setAdd={setAdd} />
      {add ? <AddTask onAdd={addTask} /> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : <h1 style={{color: 'white', textAlign: "center"}}>No Tasks!</h1>}
    </div>
  );
}

export default App;
