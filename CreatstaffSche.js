const mongoose = require("mongoose")

const vendor_Schem = new mongoose.Schema({
    name:{
        type:String,
       
    },
   doj:{
    type:String,
   
},
username:{
    type:String,
},
password:{
    type:String,
},
comment:{
    type:String,
}
})

module.exports = mongoose.model("staff", vendor_Schem)