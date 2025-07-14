import { Router } from "express";
import { TableController } from "../controller/Table.controller.js";

const TableRouter = Router();

TableRouter.get("/", TableController.GetTable);
TableRouter.post("/", TableController.PostTable);
TableRouter.put("/:id", TableController.UpdateTable);
TableRouter.delete("/:id", TableController.DeleteTable);

export default TableRouter;