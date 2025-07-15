import mongoose from "mongoose";

const DbConnect = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log(`Mongoose connected .......
     `);
};

export default DbConnect