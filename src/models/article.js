import { Schema, model } from "mongoose";

//ADD - main content - array of objects fe [{type: 'image', content: 'https://...'}, {type: 'paragraph', content: 'Lorem ipsum...'}]

const articleSchema = new Schema(
  {
    mainImage: String,
    text: String,
    author: String,
    comments: Number //later replace with array of IDs
  },
  {
    timestamps: true
  }
);

const Article = model("Article", articleSchema);

export default Article;
