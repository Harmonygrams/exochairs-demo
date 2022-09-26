import { useState } from 'react' 
import { Link , Navigate} from 'react-router-dom'
import axios from 'axios'
import "./Login.css" 
import { useSelector, useDispatch } from 'react-redux'
import {actions as authActions} from '../../../store/auth-slice'
const Login = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated) 
    const [formErrorMsg, setFormErrorMsg] = useState({
        type : 0, 
        message : ''
    })
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email : '', 
        password : ''
    })
    const updateFormData = async (e) => {
        e.preventDefault()
        try{
            const url = `http://localhost:5001/users/login`
            const response = await axios.post(url, {
                email : formData.email, 
                password : formData.password
            })
            const data = await response.data
            if(!data.success)return setFormErrorMsg({ type : data.type, message : data.msg })
            if(data.success && data.token){
                dispatch(authActions.setAuthentication({
                    isAuthenticated : true, 
                    username : data.name[0]
                }))
                document.cookie = JSON.stringify(data.token)
            }
        }catch(err){console.log("Couldn't login", err)}
    }
    return(
        <section className="login-page"> 
            <div className="login-header container"> 
                <p className="nav nav__item first"><Link to="/" className="logo first">Exo<span>Chairs</span></Link></p> 
                <div className='create-new-accout'>
                    <Link to="/register"> <p> Create an account</p></Link>
                </div>
            </div>
            <div className="form-container"> 
                <form className='form' onSubmit={updateFormData}> 
                    <h2> Sign In</h2>
                    <div className='form__data-container'> 
                        <label className="form-label" htmlFor="email">Email address</label>
                        <input
                            type="email" 
                            placeholder="Enter your email address" 
                            name ="email"
                            value = {formData.email}
                            onChange = {(e) => setFormData(prevData => ({...prevData, [e.target.name] : e.target.value}))}
                        />
                        {formErrorMsg.type === 1 && <small style={{color: 'red'}}>{formErrorMsg.message}</small>}
                    </div>
                    <div className='form__data-container'> 
                        <div> 
                            <label className="form-label" htmlFor="password">Password </label>
                            <p> <Link to="/reset">Forgot password? </Link></p>
                        </div>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            name="password" 
                            onChange = {(e) => setFormData(prevData => ({...prevData, [e.target.name] : e.target.value}))}
                        />
                        {formErrorMsg.type === 2 && <small style={{color: 'red'}}>{formErrorMsg.message}</small>}
                    </div>
                    <button className="login-button"> Sign In</button>
                </form>
                {isAuthenticated && <Navigate to="/"/>}
            </div>
        </section>
    )
}
export default Login; 