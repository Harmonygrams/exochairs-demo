const {Schema, model} = require('mongoose') 
const productSchema = Schema({
    itemName : {type: String, required : true, trim: true}, 
    itemPrice : {type : Number}, 
    itemImageName : {type : String}, 
    reviewCount : {type : Number, default : 0},
    itemVendor : {type : String, trim : true}, 
    itemLaunchedYear : {type : Date}, 
    itemMaterials : {type : Array}, 
    itemDimesions : {type : Array}, 
    itemProductType : {type : String, trim : true}
})
const Product = model('Product', productSchema) 
module.exports = Product
