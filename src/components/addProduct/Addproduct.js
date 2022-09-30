import { useState } from 'react'
import "./AddProduct.css" 
const AddProduct = () => {
    const [formData, setFormData] = useState({
        itemName : "", 
        itemPrice : "", 
        itemImageName : "",
        itemReviewCount : 0,
        itemVendor : "", 
        itemLanchedYear : "", 
        itemMaterials : "", 
        itemDimensions : "",
        itemProductType : "" 
    })
    return(
        <div> 
            <form> 
                <input 
                    type = "text"
                    placeholder="Item name"
                    value={formData.itemName}
                />
                <input 
                    type = "number"
                    placeholder='price'
                    value = {formData.itemPrice}
                />
                <input 
                    type = "text"
                    placeholder='imageName'
                    value = {formData.itemImageName}
                />
                <input 
                    type = "text"
                    placeholder='reviews'
                    value = {formData.reviewCount}
                />
                <input 
                    type = "text" 
                    placeholder = "vendor" 
                    value = {formData.itemVendor} 
                />
                <input 
                    type = "date" 
                    value = {formData.itemLanchedYear} 
                />
            </form>
        </div>
    )
}
export default AddProduct