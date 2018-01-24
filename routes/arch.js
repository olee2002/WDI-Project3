const express = require('express');
const router = express.Router({ mergeParams: true })
const Arch = require('../db/models/Arch')


router.get('/', async (req, res) => {
    try {
        const cities = await Arch.find({})
        res.json(cities)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    try {
        const newArch = await Arch.create({})
        res.json(newArch)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.delete('/:archId', async (req, res) => {
    try {
        await Arch.findByIdAndRemove(req.params.archId)
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.patch('/:archId', async (req, res) => {
    try {


        const updatedArch =
            await Arch.findByIdAndUpdate(req.params.archId, req.body, { new: true })

        res.json(updatedArch)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

module.exports = router