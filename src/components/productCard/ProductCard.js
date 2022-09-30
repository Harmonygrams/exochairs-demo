import { Link } from 'react-router-dom'
import Sidechair from '../../images/Sidechar.webp'
import "./Product.css"
import { useDispatch } from 'react-redux'
import  {actions as cartActions} from '../../store/cart-slice'
const ProductCard = ({id, itemName, itemPrice, reviewScore, itemImageName}) => {
    const dispatch = useDispatch() 
    const productImage = require(`../../images/${itemImageName}`)
    const addToCart = () => {
        dispatch(cartActions.addToCart({
            id : id, 
            itemName : itemName, 
            itemPrice : itemPrice, 
        }))
    }
    return(
        <div className='product__cart-container'> 
            <div className='product__cart-image-container'> 
                <img 
                    src={productImage}
                    alt="product"
                />
            </div>
            <div> 
                <Link class="product__name">{itemName}</Link>
                <h3 className="product__price">{itemPrice}</h3>
                <div className='product__ratings-container'> 
                    <div> 
                        <i class="fa-solid fa-star-sharp"></i>
                        <i class="fa-solid fa-star-sharp"></i>
                        <i class="fa-solid fa-star-sharp"></i>
                        <i class="fa-solid fa-star-sharp"></i>
                        <i class="fa-regular fa-star-sharp-half-stroke"></i>
                    </div>
                    <p> No reviews </p>
                </div>
                <button className='add-to-cart-btn' onClick={addToCart}>ADD TO CART</button>
            </div>
        </div>
    )
}
export default ProductCard