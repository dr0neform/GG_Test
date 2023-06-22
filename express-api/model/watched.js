const Mongoose = require("mongoose")
const WatchedSchema = new Mongoose.Schema({},{strict:false})

const Watched = Mongoose.model("watched", WatchedSchema)
module.exports = Watched