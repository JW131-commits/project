const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/kinopoisk_1').then(()=>{
    console.log('Connected to MongoDB');
}).catch((e)=>{
    console.log('Filed to connected to MongoDB');
})