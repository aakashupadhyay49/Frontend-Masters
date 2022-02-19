const { Schema, model } = require("mongoose");

const teacherSchema = new Schema(
	{
		name: { type: String, required: true },
		profile_url: { type: String, required: true },
		job: { type: String, required: true },
		description: { type: String, required: true },
		git_link: { type: String, required: false },
		linkedIn_link: { type: String, required: false },
		twitter_link: { type: String, required: false },
		other_link: { type: String, required: false },
		current_status: { type: String, required: true, default: "Active" },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = model("teacher", teacherSchema);
