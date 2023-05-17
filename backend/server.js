import express from "express";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("SERVER is running"));

app.use('/api/users', userRoutes);


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => (
    console.log(`SERVER is running on port ${port}`))
)