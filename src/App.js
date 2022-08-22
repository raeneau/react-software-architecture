import React from "react";
import styled from "styled-components";
import { Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Articles } from "./pages/Articles";

const BigBlueHeading = styled.h1`
  color: deepskyblue;
  font-size: 96px;
`;

const App = () => {
  return (
    <>
      <BigBlueHeading>Server-Side Rendering Example</BigBlueHeading>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
      </Switch>
    </>
  );
};

export default App;
