import React from "react";

import { ArticleQuote, ArticleQuoteAuthor, ArticleQuoteText } from "../styled";

export default ({ author, text }) => (
  <ArticleQuote>
    <ArticleQuoteAuthor>- {author}</ArticleQuoteAuthor>
    <ArticleQuoteText>{text}</ArticleQuoteText>
  </ArticleQuote>
);
