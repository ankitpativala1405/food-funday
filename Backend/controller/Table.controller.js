import { Table } from "../model/table.model.js";

export const TableController = {
  GetTable: async (req, res) => {
    const user = await Table.find();
    res.status(200).send(user);
  },
  PostTable: async (req, res) => {
    const user = await Table.create(req.body);
    res.status(201).json(user);
  },
  UpdateTable: async (req, res) => {
    const { id } = req.params;
    const Update = await Table.findByIdAndUpdate({ id }, req.body, {
      new: true,
    });
    res.status(200).json(Update);
  },
  DeleteTable: async (req, res) => {
    const { id } = req.params;
    const Delete = await Table.findByIdAndDelete({ id });

    if (!Delete) {
      return res.status(404).json({ message: "Table Not Found" });
    }
    res.status(200).json({ message: "Table Data Deleted", item: Delete });
  },
};
