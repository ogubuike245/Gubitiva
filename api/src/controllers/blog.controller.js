import {
  createBlogPostService,
  updateBlogPostService,
  getSingleBlogPostService,
  getAllBlogPostsService,
  deleteBlogPostService,
} from "../services/blog.service.js";

export const createBlogPost = async (request, response, next) => {
  try {
    const { title, category, snippet, content } = request.body;
    const result = await createBlogPostService({
      title,
      category,
      snippet,
      content,
    });

    const { status, message, post, success } = result;
    return response.status(status).json({ message, success, post });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error creating blog post" });
    next(error);
  }
};

export const getAllBlogPosts = async (request, response, next) => {
  try {
    const result = await getAllBlogPostsService();
    const { status, message, posts, success } = result;
    return response.status(status).json({ message, success, posts });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error getting blog posts" });
    next(error);
  }
};

export const getSingleBlogPost = async (request, response, next) => {
  const { id } = request.params;
  try {
    const result = await getSingleBlogPostService(id);
    const { status, message, post, success } = result;
    return response.status(status).json({ message, success, post });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error getting blog post" });
    next(error);
  }
};

export const updateBlogPost = async (request, response, next) => {
  const { id } = request.params;
  const { title, content, category, snippet, featured } = request.body;
  try {
    const result = await updateBlogPostService({
      title,
      content,
      category,
      snippet,
      featured,
      id,
    });
    const { status, message, post, success } = result;
    return response.status(status).json({ message, success, post });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error updating blog post" });
    next(error);
  }
};

export const deleteBlogPost = async (request, response, next) => {
  const { id } = request.params;
  try {
    const result = await deleteBlogPostService({ id });
    const { status, message, success, error, post } = result;
    return response.status(status).json({ message, success, error, post });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error deleting blog post" });
    next(error);
  }
};
