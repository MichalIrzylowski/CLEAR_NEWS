import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import LogoComponent from "./LogoComponent";
import Nav from "./Nav";
import { Main } from "./styled";
import Home from "./Home";
import About from "./About";

import { connect } from "react-redux";

import withNewsSubscription from "../HOCs/WithNewsSubscription";
import ArticlesWrapper from "./ArticlesWrapper";

import Footer from "./Footer";

import Article from "./Article/index";

import action from "../reducer/actionTypes";

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
  // console.log("[app]", props);
  console.log("[APP]");
  return (
    <>
      <GlobalStyle />
      <Header />

      <LogoComponent />

      <Nav />

      <Main>
        <Switch>
          <Route
            exact
            path="/entertainment"
            component={withNewsSubscription(
              ArticlesWrapper,
              "entertainmentNews",
              props.loadNews,
              "Entertainment",
              "ENTERTAINMENT_NEWS"
            )}
          />
          <Route
            exact
            path="/politics"
            component={withNewsSubscription(
              ArticlesWrapper,
              "politicsNews",
              props.loadNews,
              "Politics",
              "POLITICS_NEWS"
            )}
          />
          <Route
            exact
            path="/sports"
            component={withNewsSubscription(
              ArticlesWrapper,
              "sportsNews",
              props.loadNews,
              "Sports",
              "SPORTS_NEWS"
            )}
          />
          <Route
            exact
            path="/worldwide"
            component={withNewsSubscription(
              ArticlesWrapper,
              "worldwideNews",
              props.loadNews,
              "Worldwide",
              "WORLDWIDE_NEWS"
            )}
          />
          <Route
            exact
            path="/innovation"
            component={withNewsSubscription(
              ArticlesWrapper,
              "innovationNews",
              props.loadNews,
              "Innovation",
              "INNOVATION_NEWS"
            )}
          />
          <Route
            exact
            path="/education"
            component={withNewsSubscription(
              ArticlesWrapper,
              "educationNews",
              props.loadNews,
              "Education",
              "EDUCATION_NEWS"
            )}
          />
          <Route
            exact
            path="/culture"
            component={withNewsSubscription(
              ArticlesWrapper,
              "cultureNews",
              props.loadNews,
              "Culture",
              "CULTURE_NEWS"
            )}
          />
          <Route path="/:newsType/:id" component={Article} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loadNews: (typeOfNews, pageNumber, route) => {
      dispatch({
        type: action.LOAD_NEWS_REQUEST,
        typeOfNews,
        pageNumber,
        route
      });
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
