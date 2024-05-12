import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://f200366:PUioRwQFHfq4faAF@testcluster.wmvj69r.mongodb.net/?retryWrites=true&w=majority", { dbName: "MERN_STACK_EVENT_MESSAGE" })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
