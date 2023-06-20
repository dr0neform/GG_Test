const express = require("express")
const router = express.Router()
const { watch, unwatch, fetch } = require("./watch")
router.route("/watch").post(watch)
router.route("/fetch").get(fetch)
router.route("/unwatch").delete(unwatch);

module.exports = router