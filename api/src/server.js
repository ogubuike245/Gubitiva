import app from "./app.js";
import { connectToDatabaseAndStartServer } from "./config/db.js";

connectToDatabaseAndStartServer(app);
