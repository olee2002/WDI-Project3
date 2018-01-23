const express = require('express')
const router = express.Router({ mergeParams: true })
const City = require('../db/models/City')


//Index Route
router.get('/', async (req, res) => {
    try {
        const city = await city.findById(req.params.id)
        const arch = city.arch
        res.json(arch)
    } catch (err) {
        res.send(err)
    }
})


router.post('/', async (req, res) => {
    try {
        const newArch = new Arch(req.body.arch)
        console.log(newArch)

        const city = await city.findById(req.params.id)

        city.arch.push(newArch)

        const saved = await city.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})


router.delete('/:archId', async (req, res) => {
    try {
        console.log('route hit')
        const city = await city.findById(req.params.id)
        console.log(req.params.archId)
        city.arch.id(req.params.archId).remove()
        const saved = await city.save()
        console.log(saved)
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;