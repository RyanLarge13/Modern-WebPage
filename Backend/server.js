import { connectDB } from "./config/db.js";
import express from "express";
import dotenv from "dotenv";

//======Importing routers======
import { indexRouter } from "./routes/index.js";
import { loginRouter } from "./routes/loginSignupRouter/loginRouter.js";

dotenv.config();
connectDB();

const app = express();

//Middleware
app.set("views", "../Frontend");
app.set("view engine", "ejs");
app.use(express.static("../Frontend"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter, loginRouter);

app.listen(8080, () =>
  console.log("Your app is listening on port 8080 : http://localhost:8080")
);
