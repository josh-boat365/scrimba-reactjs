import "./App.css";
import ReactFacts from "./components/ReactFacts";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1 className="header">Projects</h1>
      <h2 className="">1. React Facts</h2>
      <div>
        <ReactFacts />
      </div>
      <h2 className="">2. Counter App</h2>
      <Counter />
    </div>
  );
}

export default App;
