const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const ArchSchema = new Schema(
    {
        name: String,
        type: String,
        address: String,
        photoUrl: String,
    },
    {
        timestamps: {},
        usePushEach: true
    }

)

const CitySchema = new Schema(
    {
        name: String,
        location: String,
        photoUrl: String,
        description: String,
        arch: [ArchSchema]
    },
    {
        timestamps: {},
        usePushEach: true
    }
)


const UserSchema = new Schema(
    {
        userName:String,
        email: String,
        lastName: String,
        photoUrl: String,
    },
    {
        timestamps: {}
    }

)


module.exports = {
    UserSchema,
    CitySchema,
    ArchSchema
}