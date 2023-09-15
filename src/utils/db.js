import mongoose from "mongoose";

const connect = async () => {
  const { NEXT_PUBLIC_MONGO } = process.env;

  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(NEXT_PUBLIC_MONGO);
    //console.log("Connected to Mongoose !");
  } catch (error) {
    throw new Error("Connection failed !");
  }
};

export default connect;
