import express from "express";
import dotenv from "dotenv";
import DbConnect from "./config/DbConnect.js";
import TableRouter from "./router/Table.router.js";
import cors from 'cors'

dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors())
app.use(express.json())
app.use("/Table",TableRouter);


app.get("/demo", async (requestAnimationFrame, res) => {
  try {
    const data = { message: "Demo route working fine!" };
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in /demo route:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
})

app.listen(port, () => {
  console.log(`Server Start omn Port --> ${port}`);
  DbConnect();
});