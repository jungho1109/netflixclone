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

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(process.env.PORT || 5000, () => console.log(`Server is On`));
