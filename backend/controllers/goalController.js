const asyncHandler = require("express-async-handler");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals reached" });
});

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "text is required" });
  }
  res.status(200).json({ message: "set goals reached" });
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `put goals reached on id ${req.params.id}` });
});

// @desc    Delete goal
// @route   GET /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `delete goals reached on id ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
