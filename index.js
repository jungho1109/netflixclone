import express from "express";
import { connectDB } from "./config/db";
import { router as userRouter } from "./routes/user";
import { router as apiRouter } from "./routes/api";

const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

// Define Routes
app.use("/user", userRouter);
app.use("/api", apiRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is on PORT ${PORT}`));
