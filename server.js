const express = require("express");
var path = require("path");

const app = express();
const http = require("http").createServer(app);
app.use("/public", express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(8080, () => console.log(`Server is listening on the port 8080`));
