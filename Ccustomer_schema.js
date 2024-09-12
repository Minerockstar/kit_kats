const mongoose = require("mongoose")

const customer_Schema = new mongoose.Schema({
    clientName:{
           type:String,
         
    },
    address:{
           type:String,
           
},
    
date:{
           type:String,
         
    },
    state:{
        type:String,
      
    },
    contact:{
        type:Number,
      
   },
   gstin:{
    type:String,
   
},
invoiceNo:{
    type:String,
    
}
})

module.exports = mongoose.model("createcustomers", customer_Schema)