import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import LogoComponent from "./LogoComponent";
import Nav from "./Nav";
import { Main } from "./styled";
import Home from "./Home";
import About from "./About";

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
    overflow: hidden;
  }
`;

const App = props => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <LogoComponent />

      <Nav />

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
