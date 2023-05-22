import { data } from "./data";

function App() {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
