import express from "express";
import {
  createBlogPost,
  updateBlogPost,
  getSingleBlogPost,
  getAllBlogPosts,
  deleteBlogPost,
} from "../controllers/blog.controller.js";

const blogRouter = express.Router();

blogRouter.post("/create/post", createBlogPost);
blogRouter.get("/posts", getAllBlogPosts);
blogRouter.get("/post/:id", getSingleBlogPost);
blogRouter.put("/edit/post/:id", updateBlogPost);
blogRouter.delete("/delete/post/:id", deleteBlogPost);

export default blogRouter;
