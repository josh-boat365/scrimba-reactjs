import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <img src={logo}  width='40px' alt='React Logo' />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was orginally created by Jordan Walke</li>
        <li>He Has over 100K starts on Github</li>
        <li>It is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps and mobile apps</li>
      </ul>
    </div>
  );
}

export default App;
