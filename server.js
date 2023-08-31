const app = require("./app");
const dataBaseCOnnection = require("./config/databaseConnection");
const dotenv = require("dotenv");

// ******************** CONFIG ********************

// ********** DOT_ENV **********
dotenv.config({
  path: "./config/config.env",
});

// ******************** DATABASE CONNECTION ********************
dataBaseCOnnection();

app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});
