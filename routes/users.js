const express = require('express');
const router = express.Router({ mergeParams: true })
const User = require('../db/models/User')

// Get Route
router.get('/', async (req, res) => {
    // Try catch blocks allow us to catch potential error messages
    try {
        //Find all users
        const users = await User.find({})
        // Send JSON of all users
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})
//Get a sigle user
router.get('/:userId', async (req, res) => {
    try {
        console.log(req.params.userId)
        //find byId
        const user = await User.findById(req.params.userId)
        //  send json of a user
        res.json(user)
    } catch (err) {
        res.send(err)
    }
})

//Create new user
router.post('/', async (req, res) => {
    try {
        //create a user
        const newUser = await User.create(req.body)
        res.json(newUser)
        console.log(newUser)
    } catch (err) {
        res.send(err)
    }
})

//Update route
router.patch('/:userId', async (req, res) => {
    try {
        const updatedUser =
            await User.findByIdAndUpdate(req.params.userId, req.body, { new: true })

        res.json(updatedUser)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:userId', async (req, res) => {
    try {
        // Delete the idea from the database
        await User.findByIdAndRemove(req.params.userId)
        // Send back a status of 200 to tell the client that the delete was successful
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        // If there is any error, tell the client something went wrong on the server
        res.sendStatus(500)
    }
})


module.exports = router;