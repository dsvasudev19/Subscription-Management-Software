const express = require("express");
const app = express();
const PORT = 3001;
const { sequelize } = require("./src/models");
require("dotenv").config();
const cors = require("cors");
const routes = require("./src/routes");
const adminRoutes=require("./src/routes/adminRoutes")
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", routes);
app.use("/admin/",adminRoutes)
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (res.headersSent) {
    return next(err);
  }
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});
sequelize.sync({ alter: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port 3001");
  });
});
