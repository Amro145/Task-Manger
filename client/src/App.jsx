import Navbar from "./componets/Navbar";
import AddInput from "./componets/tasks/AddInput";
import TasksList from "./componets/tasks/TasksList";

function App() {
  return (
    <div
      data-theme="black"
      className=" min-h-screen flex flex-col justify-start  items-center"
    >
      <Navbar />
      <AddInput />
      <TasksList />
    </div>
  );
}

export default App;
