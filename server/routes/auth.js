const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Sign in
router.post("/register", async (req, res) => {
	try {
		const { email, userName, password } = req.body;
		const hashedPassword = bcrypt.hashSync(password);
		const user = new User({ email, userName, password: hashedPassword });
		await user.save().then(() => {
			res.status(200).json({ message: "Sign up successful" });
		});
	} catch (err) {
		console.log("User Already Exists");
		res.status(200).json({ message: "User already exists" });
	}
});

// Log in
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			res.status(400).json({ message: "Please sign up first" });
		}
		const isPasswordCorrect = bcrypt.compareSync(
			req.body.password,
			user.password
		);
		if (!isPasswordCorrect) {
			res.status(400).json({ message: "Password is not correct" });
		}
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ message: "Incorrect email or password" });
	}
});

module.exports = router;
