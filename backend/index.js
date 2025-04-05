require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 8000;

// app.use(cors());
app.use(
	cors({
		origin: process.env.SERVER_TYPE === "DEVELOPMENT" ? process.env.DEVELOPMENT_SERVER_URL : process.env.DEPLOYMENT_SERVER_URL,
		methods: ["POST"],
		optionsSuccessStatus: 200,
		credentials: true,
	})
);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("Connected to Database successfully"))
	.catch((err) => console.error("Connection Failed. \nError:", err));

const ContactSchema = new mongoose.Schema(
	{
		fName: String,
		lName: String,
		email: String,
		phone: String,
		product: String,
		location: String,
		notes: String,
	},
	{ timestamps: true }
);

const ContactDetail = mongoose.model("ContactDetail", ContactSchema);

app.get("/", (req, res) => {
	res.send("<h1>Nothing to see here</h1>");
});

app.post("/submit-form", async (req, res) => {
	try {
		const contactData = new ContactDetail(req.body);
		await contactData.save();
		res.status(201).json({ message: "Form submitted successfully!" });
	} catch (error) {
		res.status(500).json({ error: "Error saving data" });
	}
});

app.listen(PORT, () => {
	// console.log(`Server is running on port ${PORT}`);
	console.log(`Server : http://127.0.0.1:${PORT}`);
});
