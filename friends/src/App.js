import logo from "./logo.svg";
import "./App.css";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="" onClick={logout}>
            Logout
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
