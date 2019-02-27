import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import LogoComponent from "./LogoComponent";
import Nav from "./Nav";
import { Main } from "./styled";
import Home from "./Home";
import About from "./About";
import Culture from "./Culture";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Catamaran:300,400,700&subset=latin-ext');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Catamaran', Arial, Helvetica, sans-serif;
    font-display: fallback;
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
          <Route path="/culture" component={Culture} />
          <Route path="/" component={Home} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default App;
