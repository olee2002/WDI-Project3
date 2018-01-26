const express = require('express');
const router = express.Router({ mergeParams: true })
const City = require('../db/models/City')


router.get('/', async (req, res) => {
  try {
    const cities = await City.find({})
    res.json(cities) 
  } catch (error) {
    console.log(error)
    res.sendStatus(500) 
  }
})

//Get a sigle city
router.get('/:cityId', async (req, res) => {
  try {
      console.log(req.params.cityId)
      //find byId
      const city = await City.findById(req.params.cityId)
      //  send json of a city
      res.json(city)
  } catch (err) {
      res.send(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const newCity = await City.create({}) 
    res.json(newCity) 
  } catch (error) {
    console.log(error)
    res.sendStatus(500) 
  }
})

router.delete('/:cityId', async (req, res) => {
  try {
    await City.findByIdAndRemove(req.params.cityId)
    res.sendStatus(200) 
  } catch (error) {
    console.log(error)
    res.sendStatus(500) 
  }
})

router.patch('/:cityId', async (req, res) => {
  try {

    
    const updatedCity =
      await City.findByIdAndUpdate(req.params.cityId, req.body, {new: true})

    res.json(updatedCity) 
  } catch (error) {
    console.log(error)
    res.sendStatus(500) 
  }
})

module.exports = router