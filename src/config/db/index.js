const async = require('hbs/lib/async');
const mongoose = require('mongoose');
async function connect()
{
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('connect susscessfully');
    } catch (error) {
        console.log('connect fail')
    }
}
module.exports ={connect};
