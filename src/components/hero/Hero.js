import "./Hero.css"
import homeProducts  from "../../data/homeProducts"
import { actions as cartActions } from '../../store/cart-slice'
import { useDispatch, useSelector } from 'react-redux'
const Hero = () =>{
    const cartItems = useSelector(state => state.cart.itemsList) 
    const heroImage = require(`../../images/${homeProducts.imageName}.png`)
    const dispatch = useDispatch() 
    const addToCart = () => {
        dispatch(cartActions.addToCart({
            ...homeProducts
        }))
    } 
    console.log(cartItems) 
    return(
        <>
            <div className="hero container"> 
                <div className='hero__title-container'> 
                    <h1 className='hero__title'> Exlusive Brown Wooden Bench 
                        For Relaxation &amp; Chilling
                    </h1>
                    <div className="review"> 
                        <i class="fa-solid fa-star-sharp"></i>
                        <i class="fa-solid fa-star-sharp"></i>
                        <i class="fa-solid fa-star-sharp"></i>
                        <i class="fa-solid fa-star-sharp"></i>
                        <i class="fa-regular fa-star-sharp-half-stroke"></i>
                        <span>( {homeProducts.reviewCount} )</span>
                    </div>
                    <div className='cta'> 
                        <button onClick={addToCart}> 
                            <i class="fa-regular fa-cart-plus"></i>
                            ${homeProducts.itemPrice}
                        </button>   
                        <div className="wish__list"> 
                            <i class="fa-regular fa-basket-shopping"></i>
                        </div>
                    </div>
                    <div className="money-back-guranteed"> 
                        <i class="fa-solid fa-shield-check"></i>
                        <p> Money back guarantee</p>
                    </div>
                </div>
                <div className='hero__image container'> 
                    <img
                        src={heroImage}
                        alt="Hero backgoround"
                    />
                </div>
            </div>
        </>
    )
}
export default Hero; 