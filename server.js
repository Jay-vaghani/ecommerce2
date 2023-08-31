const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});


app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});
