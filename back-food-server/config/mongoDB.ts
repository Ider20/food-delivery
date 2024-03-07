import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://idernas:G4ZCQ4H5EAobvxac@cluster0.q1zbkxy.mongodb.net/food_delivery"
    );
    console.log("Succesfully connected with MongoDB");
  } catch (error) {
    console.error(error);
  }
};
