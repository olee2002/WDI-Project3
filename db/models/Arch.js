const mongoose = require('mongoose')
const Schema = require('../schema')

const Arch = mongoose.model('Arch',Schema.ArchSchema)

module.exports = Arch