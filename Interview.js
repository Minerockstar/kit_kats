const mongoose = require("mongoose")

const get_datas = async(req, res)=>{
    const find = await Item.find({})
    res.json(find)
}

const post_datas = async(req, res)=>{
    const create_data = Items({
        ...req.body
    })
    const savedata = await create_data.save()
    res.json(savedata)
}
const update_datas = async(req, res)=>{
    const update_value = await Items.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
    res.json({
        msg:"Updated Successfully",
        updates_value : update_value
    })
}
const delete_datas = async(req, res)=>{
    const delete_value = await Item.findByIdAndDelete(req.params.id, {$set:req.body}, {new:true})
    res.json({
        msg:"Deleted Successfully",
        delete_values : delete_value
    })
}
const itemSchema = new mongoose.Schema({
    imageUrl: String,
    intervDate:String,
    intervrName:String,
    email:String,
    contact:String,
    qualification:String,
    yop:String,
    loca:String,
    fod:String,
    scheDate:String,
    role:String,
    source:String
});


const Items = mongoose.model("Items", itemSchema);
const get_imgs =  async(req, res)=>{

    try {
        const items = await Items.find()
        res.json(items)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}
const create_imgs = async(req, res)=>{

    try {
        const imageUrl = req.file ? req.file.filename : null;
        const newItem = new Items({ imageUrl, ...req.body });
        await newItem.save();
        res.status(201).json(newItem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
const edit_imgs = async(req, res)=>{
    try{
        const imgUrl = req.file ? req.file.filename : null
        const updatedItem = await Items.findByIdAndUpdate(
            req.params.id,
            {imgUrl},
            {new:true}
        )
        if(!updatedItem){
            return res.status(404).json({message: "Item not found"})
        }
        res.json(updatedItem)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

const delete_imgs = async(req, res)=>{
    try{
        const imgUrl = req.file ? req.file.filename : null
        const deletedItem = await Items.findByIdAndDelete(req.params.id)
        if(!deletedItem){
            return res.status(404).json({message: "Item not found"})
        }
        res.json({message:"Item deleted successfully"})
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}
module.exports = {get_datas, post_datas, update_datas, delete_datas, get_imgs, create_imgs, edit_imgs, delete_imgs}