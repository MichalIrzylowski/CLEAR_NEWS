import React, { Component } from "react";
import { Wrapper, SectionHeader, Hr, ArticlesWrapper } from "./styled";
import ArticleCard from "./ArticleCard";

import { ArticlesData } from "./static_data/latest_stories";

export default class LatestStories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Articles = ArticlesData.map((article, i) => (
      <ArticleCard
        key={i}
        image={article.mainImage}
        text={article.text}
        author={article.author}
        comments={article.comments}
        date={article.date}
      />
    ));

    return (
      <Wrapper>
        <SectionHeader>Latest Stories</SectionHeader>
        <Hr />
        <ArticlesWrapper>{Articles}</ArticlesWrapper>
      </Wrapper>
    );
  }
}
