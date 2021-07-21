import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Wrapper, GlobalStyle } from "./styles";
import Home from "../Home";
import About from "../About";
import Statistics from "../Statistics";
const App = () => {
  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default App;
