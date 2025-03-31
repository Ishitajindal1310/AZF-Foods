require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
// app.use(cors());
app.use(
	cors({
		origin: "http://127.0.0.1:5500",
		methods: ["POST"],
		optionsSuccessStatus: 200,
		credentials: true,
	})
);
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB Connected"))
	.catch((err) => console.error("MongoDB Connection Error:", err));

const ContactSchema = new mongoose.Schema(
	{
		name: String,
		phone: String,
		date: String,
		time: String,
		product: String,
		location: String,
		notes: String,
	},
	{ timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

app.get("/", (req, res) => {
	res.send("Nothing to see here");
});

app.post("/submit-form", async (req, res) => {
	try {
		const contactData = new Contact(req.body);
		await contactData.save();
		res.status(201).json({ message: "Form submitted successfully!" });
	} catch (error) {
		res.status(500).json({ error: "Error saving data" });
	}
});

app.listen(PORT, () => {
	// console.log(`Server is running on port ${PORT}`);
	// console.log(`Server : http://localhost:${PORT}`);
});
