const { StatusCodes } = require("http-status-codes");
const { FORBIDDEN } = StatusCodes;

const authorise = (permittedRoles) => {
	return (req, res, next) => {
		const user = req.user;
		let isAllowed = false;

		for (let i = 0; i < user.roles.length; i++) {
			if (permittedRoles.includes(user.roles[i])) {
				isAllowed = true;
				break;
			}
		}

		if (isAllowed) {
			next();
		} else {
			return res.status(FORBIDDEN).send({ message: "Permission denied" });
		}
	};
};

module.exports = authorise;
