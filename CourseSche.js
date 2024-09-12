const mongoose = require("mongoose")

const vendor_Sche = new mongoose.Schema({
    course:{
        type:String,
       
    },
   fee:{
    type:String,
   
},
   dura:{
    type:String,
}
})

module.exports = mongoose.model("fee", vendor_Sche)