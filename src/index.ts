import express from "express";
import sequelize from "./config/database/db";
import router from "./routes/Router";
import errorHandler from "./middlewares/errorHadler";

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use('/api', router);

const start = () => {
  try {
    sequelize.authenticate();
    console.log("Database connection has been established successfully.");
    sequelize.sync();
    app.listen(3000, () => console.log("Server is running on port 3000"));
  } catch (error) {
    console.log("Error: ",error);
    throw new Error("Error connecting to database");
  }
};

start();
