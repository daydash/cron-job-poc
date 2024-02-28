const express = require("express");
const cors = require("cors");
const CONSTANTS = require("./constants");
require("dotenv").config();
const app = express();
const PORT = process.env?.PORT || CONSTANTS?.PORT;

app.use(
	cors({
		origin: "*",
	})
);
require("./scheduler");

app.get("/", (req, res) => {
	try {
		res.status(200).json({
			success: CONSTANTS?.TRUE,
			message: CONSTANTS?.SERVER_STARTED,
		});
	} catch (error) {
		res.status(500).json({
			success: CONSTANTS?.FALSE,
			message: CONSTANTS?.INTERNAL_SERVER_ERROR,
		});
	}
});

app.listen(PORT, () => {
	console.log(CONSTANTS?.SERVER_STARTED, PORT);
	console.log(process?.pid);
});
