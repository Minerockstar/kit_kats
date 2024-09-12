const mongoose = require("mongoose")

const vendor_Schema = new mongoose.Schema({
    name:{
           type:String,
         
    },
    type:{
           type:String,
           
},
    
contact:{
           type:String,
         
    },
    email:{
        type:String,
      
    },
    address:{
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
comment:{
    type:String,
}
})

module.exports = mongoose.model("vendor", vendor_Schema)