import logo from "./logo.svg";
import "./App.css";
import Developer from "./components/Developer";

function App() {
  return (
    <div className="Ap">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Developer name=" Jerlysson" age=" 27" country=" Brasil" />
          <Developer name=" Eduardo" age=" 26" country=" Brasil" />
          <Developer name=" DaSilva" age=" 28" country=" Brasil" />
        </div>
        <img src={logo} className="App-logo1" alt="logo" />
      </header>
    </div>
  );
}

export default App;
