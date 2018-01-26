const express = require('express');
const router = express.Router({ mergeParams: true })
const City = require('../db/models/City')
const Arch = require('../db/models/Arch')

//Index Route
router.get('/', async (req, res) => {
    try {
        const city = await City.findById(req.params.cityId)
        console.log(city)
        const arch = city.arch
        console.log(arch)
        res.json(arch)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    try {
        const newarch = new archModel(req.body.arch)
        const city = await City.findById(req.params.cityId)
        city.arch.push(newarch)
        const saved = await city.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/:archId', async (req, res) => {
    try {
        const city = await City.findById(req.params.cityId)
        city.arch.id(req.params.archId).remove()
        const saved = await city.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;