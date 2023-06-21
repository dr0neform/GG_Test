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
  const params = {
      username:req.query.username,
      show_id:req.query.show_id,
        season_nr:req.query.season_nr,
        episode_nr:req.query.episode_nr
    }
    console.log(params)
  try {
    await Watched.deleteOne(params).then(watched =>
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
  const searchParameters = {username:undefined,show_id:undefined}
  if (req.query.username){
    searchParameters["username"] = req.query.username
  }
  else {
    delete searchParameters["username"]
  }
  if (req.query.show_id){
    searchParameters["show_id"] = req.query.show_id
  }
  else {
    delete searchParameters["show_id"]
  }
  console.log(searchParameters)
  try {
    await Watched.find(searchParameters).then(results =>
      res.status(200).json({
        message: "Watch record successfully retrieved.",
        results,
      })
    )
  } catch (err) {
    res.status(401).json({
      message: "Unsuccessful.",
      error: error.mesage,
    })
  }
}