const Task = require("../models/task")
const asyncWrapper = require('../middleware/async');
const {CreateCustomError} = require('../errors/custom-error')
const getTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find({})
    res.status(201).json( { tasks })
})

const postTask = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json( { task })
    
})

const getTask = asyncWrapper(async (req, res,next) => {
        const {id:thisId} = req.params
        const task = await Task.findOne({_id: thisId}).exec()
        if (!task) {
            return next(CreateCustomError(`No task with id: ${thisId}`, 404))
        }
        res.status(200).json( { task })
})

const updateTask = asyncWrapper(async (req, res, next) => {
        const {id:thisId} = req.params
        const task = await Task.findOneAndUpdate({_id: thisId}, req.body,{
            new:true,
            runValidators:true
        }).exec()
        if (!task) {
            return next(CreateCustomError(`No task with id: ${thisId}`, 404))
        }
        res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res, next) => {
        const {id:thisId} = req.params
        const task = await Task.findOneAndDelete({_id: thisId}).exec()
        if (!task) {
            return next(CreateCustomError(`No task with id: ${thisId}`, 404))
        }
        res.status(200).json({ task })
})

module.exports = { getTasks, postTask, getTask, updateTask, deleteTask }