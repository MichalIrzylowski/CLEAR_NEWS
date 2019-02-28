import React from "react";

import ArticleCard from "../components/Home/LatestStories/ArticleCard";
import loadingArrow from "../images/loader.png";

import {
  Wrapper,
  SectionHeader,
  RouteDisplay,
  StyledLink,
  RouteDisplayCursor,
  ArticlesWrapper,
  RotateWrapper,
  Rotate
} from "../components/styled";

export default ({ news, heading }) => {
  // console.log("[ARTICLE WRAPPER]");
  // console.log("[ARTICLE WRAPPER - news]", news);
  const Articles = news.map(article => (
    <ArticleCard
      key={article._id}
      image={article.mainImage}
      text={article.text}
      author={article.author}
      comments={article.comments}
      date={article.date}
      // date={article.createdAt.toLocaleString()}
    />
  ));

  // console.log("[ARTICLE WRAPPER - before return]");

  return (
    <Wrapper>
      <RouteDisplay>
        <StyledLink to="/" fontcolor="#ccc">
          Home
        </StyledLink>{" "}
        &lt; <RouteDisplayCursor>{heading}</RouteDisplayCursor>
      </RouteDisplay>

      <SectionHeader>{heading.toUpperCase()}</SectionHeader>
      <ArticlesWrapper>{Articles}</ArticlesWrapper>
      <RotateWrapper>
        <Rotate
          background={loadingArrow}
          // visible={loadNews && !allArticles}
        />
      </RotateWrapper>
    </Wrapper>
  );
};
