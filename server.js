const path = require("path");
const express = require("express");
const dotenv = require("dotenv"); // allows to create global vars
const colors = require("colors"); // colors for console
const morgan = require("morgan"); // logging
const connectDB = require("./config/db");
const transactions = require("./routes/transactions");

dotenv.config({ path: "./config/config.env" });

// start DB connection
connectDB();

const app = express();

// this allows us to use bodyparser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// api route
app.use("/api/v1/transactions", transactions);

// routing for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("/*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
