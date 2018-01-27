const express = require('express');
const router = express.Router({ mergeParams: true })
const City = require('../db/models/City')
const Arch = require('../db/models/Arch')

//Index Route
router.get('/', async (req, res) => {
    try {
        const city = await City.findById(req.params.cityId)
        console.log('FromArchRoute:'+city)
        const showArch = city.arch
        console.log('Find:'+city.arch)
        res.json(showArch)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    try {
        const newArch = new aArch(req.body.arch)
        console.log('newArchPostRoute:'+req.body.arch)
        const city = await City.findById(req.params.cityId)
        city.arch.push(newArch)
        const postArch = await City.save()
        console.log('FromArchPostRoute:'+postArch)
        res.json(postArch)
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