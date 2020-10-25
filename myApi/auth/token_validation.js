const { verify } = require("jsonwebtoken");

module.exports = {
	checkToken : (req, res, next) => {
		const toen = req.get("authorization");
		if(token){
			token = token.slice(7);
			verify(token, "")
		}else{
			res.json({
				success : 0,
				message : "Access denied! Unauthorized user."
			})
		}
	}
}
