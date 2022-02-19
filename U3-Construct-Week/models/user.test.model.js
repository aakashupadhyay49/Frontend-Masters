const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
	{
		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		mobile: {
			type: Number,
			required: true,
		},
		roles: [
			{
				type: String,
				enum: {
					values: ["admin", "user"],
				},
				default: "user",
			},
		],
		course_purchased: {
			type: String,
			required: false,
			enum: {
				values: ["monthly", "yearly", "monthly_team", "yearly_team"],
			},
		},
	},
	{
		versionKey: false,
	}
);

userSchema.pre("save", function (next) {
	if (!this.isModified("password")) return next();
	this.password = bcrypt.hashSync(this.password, 8);
	return next();
});

userSchema.methods.checkPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = model("user", userSchema);
