// Import packages
import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import blogRouter from "./routes/blog.route.js";

// App configurations
const app = express();

// Middleware and statics
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use(helmet());

// App routes
app.use("/api/v1/blog", blogRouter);

// error handling middleware
const errorHandler = (err, request, response, next) => {
  // Log the error
  console.error(err);

  // Set the status code for the response
  response.status(500).json({ error: "Internal Server Error" });
};

app.use(errorHandler);

export default app;
