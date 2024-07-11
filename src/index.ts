import express from "express";
import routes from "./routes";
import pool from "./db";

const app = express();
const port = 3001;

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
