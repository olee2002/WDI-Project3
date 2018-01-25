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
        photoUrl:String,
    },
    {
        timestamps: {},
        usePushEach: true
    }
 
)

const CitySchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        location: String,
        photoUrl: String,    
        archtecture: [ArchSchema]
    },
    {
        timestamps: {},
        usePushEach: true
    }
)
    

const UserSchema = new Schema(
    {
        userName:{
            type: String,
            required: true,
        },
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