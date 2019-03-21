import React from "react";
import Moment from "react-moment";
import {
  ArticleCardWrapper,
  ArticleCardImage,
  ArticleCardAbstract,
  ArticleCardBasicInfo,
  ArticleCardBasicInfoItem,
  StyledLink
} from "../../styled";

const ArticleCard = ({
  id,
  image,
  text,
  author,
  comments,
  date,
  abstract,
  health,
  path,
  category
}) => {
  // console.log("[ARTICLE CARD]--- author, name", author, author.name);
  return (
    <ArticleCardWrapper health={health}>
      {image && <ArticleCardImage image={image} title={text} />}
      <StyledLink to={`${path || category}/${id}`} color="#000">
        <ArticleCardAbstract>{text}</ArticleCardAbstract>
      </StyledLink>
      {abstract && (
        <ArticleCardAbstract weight="400" color="#4d4d4d">
          {abstract}
        </ArticleCardAbstract>
      )}
      <ArticleCardBasicInfo>
        <ArticleCardBasicInfoItem>By {author.name}</ArticleCardBasicInfoItem>
        <ArticleCardBasicInfoItem>{comments} comments</ArticleCardBasicInfoItem>
        <ArticleCardBasicInfoItem>
          <Moment format="DD/MM/YYYY">{date}</Moment>
        </ArticleCardBasicInfoItem>
      </ArticleCardBasicInfo>
    </ArticleCardWrapper>
  );
};

export default ArticleCard;
