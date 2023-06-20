const Mongoose = require("mongoose")
const WatchedSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique: false,
    required: true,
  },
  show_id: {
    type: String,
    required: true,
  },
  season_nr: {
    type: Number,
    required: true,
  },
  episode_nr: {
    type: Number,
    required: true,
  },

})

const Watched = Mongoose.model("watched", WatchedSchema)
module.exports = Watched