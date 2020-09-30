const pool = require("../../config/database");

module.exports = {
	create : (data, callBack) => {
		pool.query(
			`
				INSERT INTO user(email) VALUES(?)
			`,
			[
				data.email
			],
			(error, results, false) => fields) =>
			{
				if(error){
					callBack(error);
				}
				return callBack(null, results)
			}
		)
	}
}
