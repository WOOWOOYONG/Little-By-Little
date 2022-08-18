const express = require("express");
const getSchedules = require("./services/notion");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static("public"));

app.get("/schedules", async (req, res) => {
  const schedules = await getSchedules();
  res.json(schedules);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
