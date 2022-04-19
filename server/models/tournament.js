let mongoose = require('mongoose');

// create a model class
let Tournament = mongoose.Schema({
    
    name: String,
    location: String,
    startDate: String,
    entryFee: String,
    status: String
},
{
  collection: "tournaments"
});

module.exports = mongoose.model('Tournament', Tournament);
