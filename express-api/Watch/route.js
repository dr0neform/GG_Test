const express = require("express")
const router = express.Router()
const { update, unwatch, fetch,addShow } = require("./watch")
router.route("/").put(update)
router.route("/").get(fetch)
router.route("/unwatch").delete(unwatch);
router.route("/").post(addShow);

module.exports = router