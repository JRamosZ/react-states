import { useState } from "react";
// import Button from "./components/button";

// function handleClick() {
//   alert("ya le diste");
// }

function App() {
  const [counter, setContador] = useState(0);
  return (
    // <Button text="Dame click perro 🐕" handleClick={handleClick} />;
    <>
      <p>{counter}</p>
      <button onClick={() => setContador(counter + 1)}>+</button>
      <button onClick={() => setContador(counter - 1)}>-</button>
    </>
  );
}

export default App;
