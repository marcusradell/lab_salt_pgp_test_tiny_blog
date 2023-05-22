import { useState } from "react";
import { data } from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
