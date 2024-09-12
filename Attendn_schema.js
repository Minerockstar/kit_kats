const mongoose = require("mongoose")

const Attendns_schema = mongoose.Schema({
       emp :{
           type:String,
    },
    status :{
           type:String,
    },
    permission :{
        type:String,
 },
    leave :{
           type:String,
    },
    inTime :{
        type:String,
    },
    inDate :{
        type:String,
    },
    outDate :{
        type:String,
    },
    outTime :{
        type:String,
   }
})

module.exports = mongoose.model("attendance", Attendns_schema)