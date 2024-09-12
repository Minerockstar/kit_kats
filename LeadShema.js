const mongoose = require("mongoose")

const vendor_Schema = new mongoose.Schema({
    date:{
           type:String,
         
    },
    name:{
           type:String,
           
},
    
quali:{
           type:String,
         
    },
    yop:{
        type:String,
      
    },
    contact:{
        type:String,
      
   },
   loca:{
    type:String,
   
},
update:{
    type:String,
},
desent:{
    type:String,
},
agginedto:{
    type:String,
},
course:{
    type:String,
},
source:{
    type:String,
}
})

module.exports = mongoose.model("lead", vendor_Schema)