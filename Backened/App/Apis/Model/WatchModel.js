const mongoose = require('mongoose');
mongoose.pluralize(null);

const WatchSchema = new mongoose.Schema({
    name: {
        type: String,
  
    },
    price: {
        Number,
        
    },
    category: {
        type: String,

    },
    image: {
        type: String,
   
    },
    title: {
        type: String,
  
    }
});

const Watch = mongoose.model('Watch', WatchSchema);

module.exports = Watch;
