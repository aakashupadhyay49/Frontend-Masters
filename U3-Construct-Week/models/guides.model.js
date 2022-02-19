const {Schema , model, mongoose} = require("mongoose");

const guideSchema = new Schema({
    img_url : {type : String, required : true},
    git_link : {type : String, required : true}
})

module.exports = model("guide", guideSchema);