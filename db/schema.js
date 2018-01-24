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
    }
 
)

const CitySchema = new Schema(
    {
        name: String,
        location: String,
        photoUrl: String,    
        archtecture: [ArchSchema]
    })
    

const UserSchema = new Schema(
    {
        userName:String,
        email: String,
        lastName: String,
        photoUrl: String,
    }

)


module.exports = {
    UserSchema,
    CitySchema,
    ArchSchema
}