const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');


mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const seedDB = async () => {
    await Campground.deleteMany({});
    const c = new Campground({ title: 'Purple Field' });
    await c.save();
}


// seedDB().then(() => {
//     mongoose.connection.close();
// }
// );