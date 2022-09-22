import { Schema, model } from "mongoose"

const modelPosts = new Schema({
   title: {
      type: String,
      required: true,
   },
   body: {
      type: String,
      required: true,
   },
   img: {
      type: String,
      required: true,
   }
});

export const Posts = model('post', modelPosts)