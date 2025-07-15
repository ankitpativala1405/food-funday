import mongoose from "mongoose";

const TableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    person: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      trim: true,
      required: true,
    },
    time: {
      type: String,
      trim: true,
      required: true,
    },
    food: {
      type: String,
      required: true,
    },
    occasion: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Table = mongoose.model("Table", TableSchema);
