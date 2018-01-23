require('dotenv').config()
const User = require('./models/User')
const City = require('./models/City')
const Arch = require('./models/Arch')
const mongoose = require('mongoose')

//connect to database
mongoose.connect('mongodb://localhost/project3')

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!
    ${error}
    `)
    process.exit(-1)
})

User.remove({})
    .then(() => {
        const ayana = new User({
            userName: 'ayana',
            email: 'ayana@gmail.com',
            firstName: 'Ayana',
            lastName: 'Red',
            photoUrl: 'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/476988_113338118805486_1101913022_o.jpg?oh=e796fdec4d1212dbd5083d069e8edb71&oe=5AF919C4'
        })
        const atlanta = new City({
            name: 'atlanta',
            location: 'Atlanta, GA',
            photoUrl: 'https://imageserver-bisnow1.netdna-ssl.com/c4JtTfO8K44lGMaKcbH-J7gWsSA=/0x0/publisher/5a6217ea655ac_Atlanta_Skyline_from_Buckhead.jpeg'
        })
        

        const arch = new Arch({
            name: 'arch',
            address: '123 street atlanta, ga',
            photoUrl:'https://images1.apartments.com/i2/zBOcmejS_a60RtOHxPRZqasXZQRoqItBbw9BxwPCZws/111/the-lofts-at-college-hill-macon-ga-foto-del-edificio.jpg'
        })
        atlanta.archtecture.push(arch)
        return (ayana.save(), atlanta.save())
    })
    .catch((error) => {
        console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
        console.log(error)
    }).then(() => {
        mongoose.connection.close()
        console.log(`
        ||||||||||||||||||||||||||||||||
        Finished seeding database...

        Data Sucessfully Seeded..

        Disconnected from MongoDB
        ||||||||||||||||||||||||||||||||
      `)
    })
