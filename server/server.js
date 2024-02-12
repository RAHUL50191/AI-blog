const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3001 || process.env.PORT;
app.use(cors({ origin: ["http://localhost:3000"] }));

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(PORT, () => {
  console.log("server running on ", PORT);
});
