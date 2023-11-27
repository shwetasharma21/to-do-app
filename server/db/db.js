const mongoose = require("mongoose");

const connect = async (req, res) => {
	try {
		await mongoose.connect(
			"mongodb+srv://shweta:Db123@cluster0.0fv0heb.mongodb.net/?retryWrites=true&w=majority"
		);
		console.log("Connected to database successfully");
	} catch (err) {
		console.log(err.message);
		res.status(400).json({
			message: "not connected to database",
		});
	}
};
module.exports = connect;
