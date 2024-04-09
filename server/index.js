const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();

require("./config/dbConnection");

const taskRouter = require("./router/taskRouter");
app.use(express.json());
app.use("/api", taskRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
