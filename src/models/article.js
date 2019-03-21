import { Schema, model } from "mongoose";

//ADD - main content - array of objects fe [{type: 'image', content: 'https://...'}, {type: 'paragraph', content: 'Lorem ipsum...'}]

const articleSchema = new Schema(
  {
    mainImage: String,
    text: String,
    author: {},
    comments: Number, //later replace with array of IDs
    category: String,
    abstract: String,
    header: [],
    backgroundImage: String,
    content: [],
    views: Number,
    shares: Number
  },
  {
    timestamps: true
  }
);

const Article = model("Article", articleSchema);

export default Article;
