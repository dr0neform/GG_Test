const Watched = require("../model/watched");

exports.update = async (req, res, next) => {
  const { username, show_id } = req.body
const query = {username: username,show_id:show_id};

  try {
    await Watched.findOneAndUpdate(query, req.body, {upsert: true}).then(watched =>
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
    if (req.query.season_nr) {
      params["season_nr"] = req.query.season_nr
    }
    else {
      delete params["season_nr"]
    }
    if (req.query.episode_nr) {
      params["episode_nr"] = req.query.episode_nr
    }
    else {
      delete params["episode_nr"]
    }
    console.log(params)
  try {
    await Watched.deleteMany(params).then(watched =>
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

exports.addShow = async (req, res, next) => {
  try {
    await Watched.create(req.body).then(results =>
      res.status(200).json({
        message: "created",
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