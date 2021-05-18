const manyPlaces = require("./seedData.json")
const mongoose = require("./connection")
const Place = require("../models/place")

const db = mongoose.connection

Place.deleteMany({}).then(() => {
    Place.insertMany(manyPlaces).then((places) => {
        console.log(places);
        db.close()
    })
})