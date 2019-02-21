import { Schema, model } from "mongoose";

const inPictureSchema = new Schema(
  {
    title: String,
    src: String,
    author: String
  },
  {
    timestamps: true
  }
);

const InPicture = model("InPicture", inPictureSchema);

export default InPicture;
