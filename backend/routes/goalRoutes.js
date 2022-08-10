const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

router.use(protect).route("/").get(getGoals).post(setGoal);
router.use(protect).route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
