const express = require('express');
const router = express.Router({ mergeParams: true })
const City = require('../db/models/City')

// Get Route
router.get('/', async (req, res) => {
    // Try catch blocks allow us to catch potential error messages
    try {
        //Find all city
        const city = await City.find({})
        // Send JSON of all city
        res.json(city)
    } catch (err) {
        res.send(err)
    }
})

//Create new City
router.post('/', async (req, res) => {
    try{
    const newCity = new City(req.body.City)

    const saved = await newCity.save()
    res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

//UPDATE ROUTE to update bio
router.patch('/:id', async (req, res) => {
    try {
        //This is the payload being sent over
        const updatedCity = req.body.city
        //
        const city = await City.findById(req.params.id)
        //
        //
        city.bio = updatedCity.bio
        //Save the City object
        const saved = await city.save()
        //Send the updated City
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

//Show Route
router.get('/:id', async (req, res) => {
    try {
        //Find a City by the route id
        const city = await city.findById(req.params.id)
        res.json(city)
    } catch (err) {
        res.send(err)
    }
})



module.exports = router;