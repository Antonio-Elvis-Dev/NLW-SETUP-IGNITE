import { useState } from "react";
import "./styles/global.css";
import { Habit } from "./components/Habit";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{flex:1,backgroundColor:"#021f4b"}}>
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={10} />
    </div>
  );
}

export default App;
