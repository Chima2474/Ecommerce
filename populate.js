// const connectDB = require("./db/connect");

// require("dotenv").config();
// const jsonProduct = require("./products.json");
// const Product = require("./models/product");

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     await Product.deleteMany();
//     await Product.create(jsonProduct);
//     console.log("Success!!!!");
//     process.exit(0);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();
