import React from "react";
import {
  ArticleCardWrapper,
  ArticleCardImage,
  ArticleCardAbstract,
  ArticleCardBasicInfo,
  ArticleCardBasicInfoItem
} from "./styled";

const ArticleCard = ({ image, text, author, comments, date }) => (
  <ArticleCardWrapper>
    <ArticleCardImage image={image} />
    <ArticleCardAbstract>{text}</ArticleCardAbstract>
    <ArticleCardBasicInfo>
      <ArticleCardBasicInfoItem>By {author}</ArticleCardBasicInfoItem>
      <ArticleCardBasicInfoItem>{comments} comments</ArticleCardBasicInfoItem>
      <ArticleCardBasicInfoItem>{date}</ArticleCardBasicInfoItem>
    </ArticleCardBasicInfo>
  </ArticleCardWrapper>
);

export default ArticleCard;
