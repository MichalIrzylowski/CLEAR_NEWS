import React from "react";
import {
  ArticleCardWrapper,
  ArticleCardImage,
  ArticleCardAbstract,
  ArticleCardBasicInfo,
  ArticleCardBasicInfoItem
} from "../../styled";

const ArticleCard = ({
  image,
  text,
  author,
  comments,
  date,
  abstract,
  health
}) => (
  <ArticleCardWrapper health={health}>
    {image && <ArticleCardImage image={image} title={text} />}
    <ArticleCardAbstract>{text}</ArticleCardAbstract>
    {abstract && (
      <ArticleCardAbstract weight="400" color="#4d4d4d">
        {abstract}
      </ArticleCardAbstract>
    )}
    <ArticleCardBasicInfo>
      <ArticleCardBasicInfoItem>By {author}</ArticleCardBasicInfoItem>
      <ArticleCardBasicInfoItem>{comments} comments</ArticleCardBasicInfoItem>
      <ArticleCardBasicInfoItem>{date}</ArticleCardBasicInfoItem>
    </ArticleCardBasicInfo>
  </ArticleCardWrapper>
);

export default ArticleCard;
