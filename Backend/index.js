import express from "express";
import dotenv from "dotenv";
import DbConnect from "./config/DbConnect.js";
import TableRouter from "./router/Table.router.js";

dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(TableRouter);

app.listen(port, () => {
  console.log(`Server Start omn Port --> ${port}`);
  DbConnect();
});
