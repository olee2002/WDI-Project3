const express = require('express');
const router = express.Router({ mergeParams: true })
const City = require('../db/models/City')
const Arch = require('../db/models/Arch')

//Index Route
router.get('/', async (req, res) => {
    try {
        const city = await City.findById(req.params.cityId)
        // console.log('GetFromArchRoute:'+city)
        const showArch = city.arch
        // console.log('Get:'+city.arch)
        res.json(showArch)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    try {
        const newArch = new Arch(req.body)
        console.log('newArchPostRoute:'+JSON.stringify(req.body))
        const city = await City.findById(req.params.cityId)
        console.log('FromArchPostRoute:'+JSON.stringify(city))
        city.arch.push(newArch)
        
        const postArch = await city.save()
        
        res.json(postArch)
    } catch (err) {
        res.send(err)
    }
})

// router.delete('/:archId', async (req, res) => {
//     try {
//         const city = await City.findById(req.params.cityId)
//         city.arch.id(req.params.archId).remove()
//         const saved = await city.save()
//         res.json(saved)
//     } catch (err) {
//         res.send(err)
//     }
// })

module.exports = router;