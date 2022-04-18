let mongoose = require('mongoose');

// create a model class
let Tournament = mongoose.Schema({
    
    name: String,
    location: String,
    entryFee: String,
    startDate: String,
    status: String
},
{
  collection: "tournaments"
});

module.exports = mongoose.model('Tournament', Tournament);
