require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const productRouter = require("./routes/products");
//middleware
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send("store Api");
});

app.use("/api/v1/products", productRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    //CONNECT DB
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(
        ` Connected to Db successcfully Server is listening on port:${port}`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start();
