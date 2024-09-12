const customer_Schema = require("./VendorSchema")

const get_customers = async(req, res)=>{
    const find = await customer_Schema.find({})
    res.json(find)
}
const post_customers= async(req, res)=>{
    const create_data = customer_Schema({
        ...req.body
    })
    const savedata = await create_data.save()
    res.json(savedata)
}

const update_customers = async(req, res)=>{
    const update_value = await customer_Schema.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
    res.json({
        msg:"Updated Successfully",
        updates_value : update_value
    })
}

const delete_customers = async(req, res)=>{
    const delete_value = await customer_Schema.findByIdAndDelete(req.params.id, {$set:req.body}, {new:true})
    res.json({
        msg:"Deleted Successfully",
        delete_values : delete_value
    })
}

module.exports = {get_customers, post_customers, update_customers, delete_customers}