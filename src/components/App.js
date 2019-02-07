import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import PageMenu from "./PageMenu";
import Home from "./Home";
import About from "./About";
import { Main } from "./styled";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  #app {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const App = props => {
  return (
    <>
      <GlobalStyle />
      <PageMenu />

      <hr />
      <Main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Main>
    </>
  );
};

export default App;
