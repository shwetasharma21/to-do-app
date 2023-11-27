const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

// Create
router.post("/addTask", async (req, res) => {
	try {
		const { title, desc, email } = req.body;
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			const list = new List({ title, desc, user: existingUser });
			await list.save();
			res.status(200).json({ list });
			existingUser.list.push(list);
			await existingUser.save();
		}
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ message: "Unable to create List Item" });
	}
});

// Update
router.put("/updateTask/:id", async (req, res) => {
	try {
		const { title, desc, email } = req.body;
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			const list = await List.findByIdAndUpdate(req.params.id, { title, desc });
			await list.save();
			res.status(200).json({ message: "List item is updated successfully" });
		}
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ message: "Unable to update List Item" });
	}
});
// Delete
router.delete("/deleteTask/:id", async (req, res) => {
	try {
		const { email } = req.body;
		const existingUser = await User.findOneAndUpdate(
			{ email },
			{ $pull: { list: req.params.id } }
		);
		if (existingUser) {
			await List.findByIdAndDelete(req.params.id);
			res.status(200).json({ message: "List item is deleted successfully" });
		}
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ message: "Unable to delete List Item" });
	}
});

// Get
router.get("/getTask/:id", async (req, res) => {
	try {
		const list = await List.find({ user: req.params.id }).sort({
			createdAt: -1,
		});
		if (list.length != 0) res.status(200).json(list);
		else res.status(200).json({ message: "list doesn't exist" });
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ message: "Unable to get the list item" });
	}
});

module.exports = router;
