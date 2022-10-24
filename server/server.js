require("dotenv").config();
const express = require("express");

const PORT = 8000;

const app = express();

// catch all endpoint
app.get("*", (req, res) => {
  res.json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
