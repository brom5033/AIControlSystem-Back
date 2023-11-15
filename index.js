const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send([
    {
      id: 1,
      name: "SparkBot",
      pos: "서울",
      status: "ready",
      uptime: "2023-11-01 17:00:23",
      power: 100,
    },
    {
      id: 2,
      name: "Anita",
      pos: "서울",
      status: "working",
      uptime: "2023-08-05 14:20:40",
      power: 55,
    },
    {
      id: 3,
      name: "John",
      pos: "서울",
      status: "charging",
      uptime: "2023-11-10 20:01:40",
      power: 23,
    },
  ]);
});
app.get("/use", (req, res) => {
  res.send([
    {
      id: 1,
      name: "SparkBot",
      pos: "서울",
      startTime: "2023-11-08 09:41:40",
      endTime: "2023-11-08 10:40:40",
    },
    {
      id: 2,
      name: "Anita",
      pos: "서울",
      startTime: "2023-08-03 12:30:40",
      endTime: "2023-08-03 19:40:28",
    },
    {
      id: 3,
      name: "John",
      pos: "서울",
      startTime: "2023-11-04 08:40:40",
      endTime: "2023-11-04 13:50:12",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
