import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.error(
        "MongoDB connection error: please make sure MongoDB is running. Error:",
        err
      );
      process.exit(1); // Exit the process with a failure code
    });
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}
