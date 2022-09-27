import {useState} from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css" 
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {actions as authActions} from '../../store/auth-slice'
const Navbar = ({isAuthenticated}) => {
    const [activeNav, updateActiveNav] = useState(false)
    const dispatch = useDispatch()
    const logout = async () => {
        dispatch(authActions.logout())
    }
    return(
        <header className='header'> 
            <div className='sub__header'>
                <div className='sub__header container'> 
                    <p className='notification'>Get 25% discount on your first purchase </p>
                    <ul className='sub__header nav__list'> 
                        <li className= "sub__header nav__item"><Link className="sub__header nav__link" to="/faq">Faq</Link></li>
                        <li className= "sub__header nav__item"><Link className="sub__header nav__link" to="/help">Help</Link></li>
                        <li className= "sub__header nav__item">
                            <Link className="sub__header nav__link" to="/download">
                                <i className="fa-solid fa-grid-2"></i>
                                Download Mobile App
                            </Link>
                        </li>
                    </ul>
                </div> 
            </div>
            <nav className='nav'> 
                <ul className="nav nav__list container"> 
                    <li className="nav nav__item first"><Link className="logo first" to="/">Exo<span>Chairs</span></Link></li> 
                    <li className="nav nav__item search-bar">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input 
                            placeholder='Search..'
                            />
                        <i class="fa-solid fa-sliders"></i>
                    </li>
                    <li className="nav nav__item second">
                        <Link className="nav__link" to="/cart">
                            <i className="fa-regular fa-cart-shopping"></i>
                            Cart
                        </Link>
                    </li>
                    <li className="nav nav__item third"> 
                        <Link className="nav__link" to="/categories">
                            <i className="fa-regular fa-layer-group"></i>
                            Categories
                        </Link>
                    </li>
                    <li className="nav nav__item last"> 
                        <Link className="nav__link" to="user">
                            <i className="fa-duotone fa-user"></i>
                            {isAuthenticated ? "Harmony" : "Guest"}
                        </Link>
                        <i style={{paddingLeft : "10px"}}className="fa-regular fa-caret-down user" onClick={() => updateActiveNav(prevState => !prevState)}></i>
                        <div className='user-options' style={{display : activeNav ? "block" : "none"}}>
                            <ul> {isAuthenticated ? 
                                <>
                                    <li> <Link className='user__action-link' to="/account">Account</Link></li>
                                    <li> <Link onClick={logout} className='user__action-link'>Logout</Link></li>
                                </>
                                :
                                <>
                                <li> <Link className='user__action-link' to="/login">Login</Link></li>
                                <li> <Link className='user__action-link' to="/register">Sign up</Link></li>
                                </>
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar