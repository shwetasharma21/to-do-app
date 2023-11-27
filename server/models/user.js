const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	userName: { type: String },
	password: { type: String, required: true },
	list: [
		{
			type: mongoose.Types.ObjectId,
			ref: "List",
		},
	],
});

module.exports = mongoose.model("User", userSchema);
