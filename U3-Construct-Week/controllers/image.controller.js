const { INTERNAL_SERVER_ERROR } = require("../utils/error_codes");
const path = require("path");
const getCourseImage = async (req, res) => {
	try {
		const filePath = path.join(
			__dirname,
			`../uploads/coursesImages/${req.params.fileName}`
		);
		return res.sendFile(filePath);
	} catch (err) {
		console.log("Error", err);
		return res.status(INTERNAL_SERVER_ERROR).send({ message: err.message });
	}
};
module.exports = { getCourseImage };
