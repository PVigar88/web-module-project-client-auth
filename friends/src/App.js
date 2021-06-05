import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/login">Login</Link>
            <Link to="">Logout</Link>
          </nav>
          <div>
            <Switch>
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
