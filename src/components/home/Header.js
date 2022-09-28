import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import SofaCardImage from '../../images/Couch.png'
import './Home.css'
import ChairImage from '../../images/Chair.jpeg'
const Header = ({isAuthenticated, username}) => {
    return(
        <>
            <div> 
                <Navbar isAuthenticated={isAuthenticated} username={username}/> 
                <Hero />
            </div>
            <div className='product__card-hero container cursor'> 
                <div className="product__card-title hero-title-col-1"> 
                    <div className="home__card title"> 
                        <h1 className="hero__title">Chair </h1>
                        <p> 12 Brands, 8,4k products </p>
                    </div>
                    <img 
                        src={ChairImage}
                        alt="Chair"
                    />
                </div>
                <div className="product__card-title cursor hero-title-col-2"> 
                    <div className='home__card title'> 
                        <h1 className='hero__title'>Couch</h1>
                        <p> 24k brands, 12,4k products</p>
                    </div>
                    <img 
                        src={SofaCardImage}
                    />
                </div>  
            </div>  
        </>
    )
}
export default Header; 