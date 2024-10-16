import express, { json } from "express";
import mongoose from "mongoose";
import postModel from "./models/post.model.js";
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const allPosts = await postModel.find();
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/", async (req, res) => {
  try {
    const { title, body } = req.body;
    const newPost = await postModel.create({ title, body });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.delete("/:id", (req, res) => {
  console.log(req.params);

  res.send(req.params);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({ id, body });
});

// ();
const DB_URL =
  "mongodb+srv://devSenior:TkyeebXoI8RdoXHP@backend.5ffy3.mongodb.net/?retryWrites=true&w=majority&appName=Backend";
const PORT = 8080;

const bootstrap = async () => {
  try {
    await mongoose.connect(DB_URL).then(() => console.log("Connected DB"));

    app.listen(PORT, () =>
      console.log(`Listening on - http//localhost/${PORT}`)
    );
  } catch (error) {
    console.log(`Error connecting with BD : ${error}`);
  }
};

bootstrap();
