const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ChintuX AI Backend is running!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", app: "ChintuX AI" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("ChintuX AI running on port " + PORT);
});
