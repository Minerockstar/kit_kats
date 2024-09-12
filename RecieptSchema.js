const mongoose = require("mongoose")

const vendor_Schemas = new mongoose.Schema({
    name:{
        type:String,
       
    },
   balance:{
    type:String,
   
},
paidamt:{
    type:String,
},
reAMt:{
    type:String,
},
type:{
    type:String,
},
comment:{
    type:String,
}
})

module.exports = mongoose.model("reciept", vendor_Schemas)