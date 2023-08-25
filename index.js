const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/",()=>{
    console.log("connected to MongoDB")
}, err=> {console.log("Error:", err.message)})
let cars = mongoose.model('cars',mongoose.Schema({brand:String,
model:String}))

cars.create({"brand":"Maruti","model":"Swift"})
.then(console.log)
.catch(console.log)