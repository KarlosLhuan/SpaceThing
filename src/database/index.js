const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/SpaceThing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
