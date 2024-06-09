const express = require("express");
const app = express();
const PORT = 3000;
const { sequelize } = require("./src/models");
require("dotenv").config();
const cors = require("cors");
const routes = require("./src/routes");
const adminRoutes=require("./src/routes/adminRoutes")


var corsOptions = {
  origin: [
    "http://localhost:3011",
    "http://localhost:3000",
    "http://localhost:5173",

  ],
  credentials: true,
  allowedHeaders: "Content-Type,Authorization,Set-Cookie",
};
app.use(cors(corsOptions));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);
app.use("/admin",adminRoutes)
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
    console.log("Server is running on port 3000");
  });
});
