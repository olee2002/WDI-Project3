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