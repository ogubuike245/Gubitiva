import { Blog } from "../models/blog.model.js";

export const createBlogPostService = async function (data) {
  const { title, category, snippet, content } = data;
  try {
    // Create a new blog post
    const post = await Blog.create({
      title,
      category,
      snippet,
      content,
    });

    // Return the created blog post
    return {
      success: true,
      error: false,
      message: "Blog Post Created successfully",
      status: 200,
      post,
    };
  } catch (error) {
    // Handle any errors that occur during the operation
    return {
      error: true,
      message: error.message,
      status: 500,
    };
  }
};

export const getAllBlogPostsService = async function () {
  try {
    // Find all blog posts
    const posts = await Blog.find({});

    // Return the found blog posts
    return {
      success: true,
      error: false,
      message: "All Blog Posts Found successfully",
      status: 200,
      posts,
    };
  } catch (error) {
    // Handle any errors that occur during the operation
    return {
      error: true,
      message: error.message,
      status: 500,
    };
  }
};

export const getSingleBlogPostService = async function (id) {
  try {
    // Find the blog post by ID
    const existingPost = await Blog.findById(id);

    // Check if the blog post exists
    if (!existingPost) {
      return {
        error: true,
        success: false,
        message: "Blog Post Does Not Exist",
        status: 404,
      };
    }

    // Return the found blog post
    return {
      success: true,
      message: "Blog Post Found successfully",
      status: 200,
      post: existingPost,
    };
  } catch (error) {
    // Handle any errors that occur during the operation
    return {
      error: true,
      message: error.message,
      status: 500,
    };
  }
};

export const updateBlogPostService = async function (data) {
  const { title, content, category, snippet, featured, id } = data;
  try {
    // Check if the blog post exists
    const existingPost = await Blog.findById(id);
    if (!existingPost) {
      return {
        error: true,
        success: false,
        message: "Blog Post Does Not Exist",
        status: 404,
      };
    }

    // Update the blog post
    const post = await Blog.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title,
          content,
          category,
          snippet,
          featured,
        },
      },
      { new: true }
    );

    return {
      success: true,
      message: "Blog Post Updated successfully",
      status: 200,
      post,
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
      status: 500,
    };
  }
};

export const deleteBlogPostService = async function (data) {
  const { id } = data;
  try {
    // Check if the blog post exists
    const existingPost = await Blog.findById(id);
    if (!existingPost) {
      return {
        error: true,
        success: false,
        message: "Blog Post Does Not Exist",
        status: 404,
      };
    }

    // Delete the blog post
    const post = await Blog.findByIdAndDelete(id);

    return {
      success: true,
      message: "Blog Post Deleted successfully",
      status: 200,
      error: false,
      post,
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
      status: 500,
    };
  }
};
