var mongoose = require("mongoose")
var Schema = mongoose.Schema;


var buildingSchema = new mongoose.Schema({
    nfcID : String,
    name: String,
    location : String,
    services : [Number]
});

var serviceSchema = new mongoose.Schema({
    name : String
})

var usersSchema = new mongoose.Schema({
    name: String,
    nfcID: String,
    services : [{type:Schema.Types.ObjectId, ref:"services"}]
})

module.exports.building = buildingSchema;
module.exports.service = mongoose.model('services' , serviceSchema);
module.exports.user = mongoose.model('users', usersSchema);