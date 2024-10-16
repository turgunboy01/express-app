import { model, Schema } from "mongoose";
const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

export default model("Post", postSchema);
