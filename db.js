/**
 * Created by zen on 15. 7. 6.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social', function(){
    console.log('mongodb connected');
});

module.exports = mongoose;