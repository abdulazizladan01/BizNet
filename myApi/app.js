require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.json({
		success : 1,
		message : "This api WORKS!"
	});
});

app.listen(process.env.APP_PORT, () => {
	console.log("Server is up and running on port : ", process.env.APP_PORT);
});
