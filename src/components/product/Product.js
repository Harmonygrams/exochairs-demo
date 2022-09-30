import ProductImage from '../../images/Sidechar.webp'
import "./Product.css" 
import Navbar from '../navbar/Navbar'
import { useDispatch } from 'react-redux'
import {actions as cartActions} from '../../store/cart-slice'
const Product = () => {
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartActions({}))
    }
    return(
        <>
            <Navbar /> 
            <section className='product container'> 
                <div className='product-col-1'> 
                    <img 
                        src={ProductImage}
                        alt="product"
                    />
                </div>
                <div className='product-col-2'> 
                    <div className='product__page item__info-container'> 
                        <h2 className='product__page item__name'> Side Chair </h2>
                        <h3 className='product__page item__price'> 320 $ </h3>
                    </div>
                    <p className='product__page brand__name'>By Eames </p>
                    <div className='product__page buttons-container'> 
                        <div className='product__page scroll_to_bottom'> 
                            <p> PLASTIC WHITE </p>
                            <i class="fa-light fa-arrow-down-long"></i>
                        </div>
                        <div className='product__page add__to__cart-button' onClick={addToCart}>
                            <p> ADD TO CART</p>
                        </div> 
                    </div>
                    <hr className='horizontal__line'/> 
                    <div> 
                        <p className='product__page item__description'>
                            The famous side chair model, from Eames Plastic Chairs 
                            The eames plastic chairs are renewed versions of legendary 
                            Fiberglass chairs. 
                            <br /> 
                            <br /> 
                            The selection of bases makes it possible to use the chairs 
                            in a wide veriety of settings: from the dining room or home 
                            office to the garden. 
                        </p>
                    </div>
                    <hr className='horizontal__line'/> 
                    <div className='product__page product__details'>
                        <div className="product__detail-container"> 
                            <h3 className="product__detail-h3">Product Type</h3>
                            <p className="product__detail-p"> Chair </p>
                        </div> 
                        <div className="product__detail-container"> 
                            <h3 className="product__detail-h3"> Dimensions </h3>
                            <p className="product__detail-p"> H 31.5" W 18" D 21.5" Seat 17.5"</p>
                        </div>
                        <div className="product__detail-container"> 
                            <h3 className="product__detail-h3"> Materials </h3>
                            <p className="product__detail-p"> Wood and Plastic </p>                        
                        </div>
                        <div className="product__detail-container"> 
                            <h3 className="product__detail-h3"> Launched </h3>
                            <p className="product__detail-p"> 1950 </p>
                        </div>
                    </div>       
                </div>
            </section>
        </>
    )
}
export default Product; 