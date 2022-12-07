const express = require('express');
const router = express.Router()
const { getTasks, postTask, getTask, updateTask, deleteTask } = require("../controllers/tasks");

router.get("/", getTasks)
router.post("/", postTask)
router.get("/:id", getTask)
router.patch("/:id", updateTask)
router.delete("/:id", deleteTask)
module.exports = router