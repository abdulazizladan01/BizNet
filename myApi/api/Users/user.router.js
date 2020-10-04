const {
	createUser,
	getUserbyUserId,
	getUsers,
	updateUsers,
	deleteUser,
} = require("./user.controller");

const router = require("express").Router();

router.post("/", createUser);

router.post("login", loginUser)

module.exports = router;
