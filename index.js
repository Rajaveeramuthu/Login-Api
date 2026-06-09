import express from "express";
import dotenv from "dotenv";
import connectDb from "./db.js";
import routes from "./components/login/login.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/login", routes);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

export default app;