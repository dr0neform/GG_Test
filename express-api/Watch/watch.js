const Watched = require("../model/watched");

exports.watch = async (req, res, next) => {
  console.log(req.body)
  const { username, show_id, season_nr, episode_nr } = req.body
  try {
    await Watched.create({
      username,
      show_id,
        season_nr,
        episode_nr
    }).then(watched =>
      res.status(200).json({
        message: "User successfully created",
        watched,
      })
    )
  } catch (err) {
    res.status(401).json({
      message: "Unsuccessful",
      error: error.mesage,
    })
  }
}

exports.unwatch = async (req, res, next) => {
  const { username, show_id, season_nr, episode_nr } = req.body
  try {
    await Watched.deleteOne({
      username,
      show_id,
        season_nr,
        episode_nr
    }).then(watched =>
      res.status(200).json({
        message: "Watch record successfully deleted.",
        watched,
      })
    )
  } catch (err) {
    res.status(401).json({
      message: "Unsuccessful",
      error: error.mesage,
    })
  }
}

exports.fetch = async (req, res, next) => {
  const username = req.query.username
  try {
    await Watched.find({username:username}).then(results =>
      res.status(200).json({
        message: "Watch record successfully retrieved.",
        results,
      })
    )
  } catch (err) {
    res.status(401).json({
      message: "Unsuccessful",
      error: error.mesage,
    })
  }
}