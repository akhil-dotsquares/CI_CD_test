const express = require("express");
const app = express();

const PORT = 3003;

app.get("/", (req, res) => {
  res.send("🚀 CI/CD Node App is running successfully! new code deployed");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});