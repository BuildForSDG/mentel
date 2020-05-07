require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// import the users route
const userRoute = require("./routes/users");

// set allow cross origin access
app.use(cors());
// parse the request in application/json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// log the path url
app.use(morgan("dev"));

const db = require("./models");
db.sequelize.sync();


app.get("/", (req, res) => {
  res.json({ message: "Welcome to Mentel Api. Please read the docs for its usage.. 🔥" });
});

app.use("/api/v1/users", userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port} 🔥`);
});