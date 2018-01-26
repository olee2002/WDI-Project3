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
City.remove({})
    .then(() => {

        const atlanta = new City({
            name: 'atlanta',
            location: 'Atlanta, GA',
            photoUrl: 'http://www.fillmurray.com/300/300'
        })

        const arch01 = new Arch({
            name: 'arch01',
            address: '456 street atlanta, ga',
            photoUrl: 'http://www.fillmurray.com/300/300'
        })
        const arch = new Arch({
            name: 'arch',
            address: '123 street atlanta, ga',
            photoUrl: 'http://www.fillmurray.com/300/300'
        })
        atlanta.arch.push(arch,arch01)

        return atlanta.save()

    })
    .then(() => User.remove({})
    )
    .then(() => {
        const ayana = new User({
            userName: 'Ayana',
            email: 'ayana@gmail.com',
            firstName: 'Ayana',
            lastName: 'Red',
            photoUrl: 'http://www.fillmurray.com/300/300'
        })


        return ayana.save()
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
