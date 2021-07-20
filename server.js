const express = require("express");
const app = express();
const port = 3000;

var path = require("path");
console.log(path.join(__dirname, "./client/build"));
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
