import HeroImage from '../../images/Hero.png'
import "./Hero.css" 
const Hero = () =>{
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
                        <span>(234)</span>
                    </div>
                    <div className='cta'> 
                        <button> 
                            <i class="fa-regular fa-cart-plus"></i>
                            $5,499
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
                        src={HeroImage}
                        alt="Hero backgoround"
                    />
                </div>
            </div>
        </>
    )
}
export default Hero; 