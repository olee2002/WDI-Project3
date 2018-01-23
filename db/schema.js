const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const ArchSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: String,
        photoUrl: {
            type: String,
            default: 'http://www.cuded.com/wp-content/uploads/2014/04/Beijing-National-Stadium.jpg/300/300'
        }
    },{ usePushEach: true }
)

const CitySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        location: String,
        photoUrl: {
            type: String,
            default: 'https://www.gettyimages.com/detail/photo/the-city-of-dreams-new-york-citys-skyline-at-royalty-free-image/599766748/300/300'
        },
        archtecture: [ArchSchema]
    },{ usePushEach: true }
)

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        email: String,
        lastName: {
            type: String,
            required: true,
        },
        photoUrl: {
            type: String,
            default: 'http://www.fillmurray.com/300/300'
        }
    },{ usePushEach: true }
)


module.exports = {
    UserSchema,
    CitySchema,
    ArchSchema
}