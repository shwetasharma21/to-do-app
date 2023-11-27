const express = require("express");
const connect = require("./db/db");
const app = express();
const cors = require("cors");
const auth = require("./routes/auth");
const list = require("./routes/list");

connect();
app.use(cors());
app.use(express.json());
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(1000, () => console.log("server started"));
