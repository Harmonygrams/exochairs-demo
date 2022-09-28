import { Link, Navigate} from 'react-router-dom'
import { useState } from 'react' 
import '../login/Login.css' 
import axios from 'axios'
const SignUp = () => {
    const [isRegistered, setIsRegistered] = useState(false) 
    const [formErrorMsg, setFormErrorMsg] = useState({
        type : 0, 
        message : ''
    })
    const [formData, setFormData ] = useState({
        fullName : '', 
        email : '', 
        password : '',
        confirmPwd : ''
    })
    const submitFormData = async (e) => {
        const url = `http://localhost:5001/users/register`
        e.preventDefault()
        try{
            if(formData.confirmPwd !== formData.password){
                setFormErrorMsg({type : 2, message : 'Passwords do not match'})
                return
            }
            const response = await axios.post(url, {
                fullName : formData.fullName,
                email : formData.email, 
                password : formData.password
            })
            const data = await response.data
            if(!data.success){
                setFormErrorMsg({
                    type : data.type, 
                    message : data.msg
                })
                return
            }
            setIsRegistered(true) 
        }catch(err){
            console.log('There was an error sending request')
            console.log(err)
        }
    }
    return(
        <section className="login-page"> 
            <div className="login-header container"> 
                <p className="nav nav__item first"><Link to="/" className="logo first">Exo<span>Chairs</span></Link></p> 
                <div className='create-new-accout'>
                    <Link to="/login"> <p> Sign in</p></Link>
                </div>
            </div>
            <div className="form-container" onSubmit={submitFormData}> 
                <form className='form'> 
                    <h2> Sign up</h2>
                    <div className='form__data-container'> 
                        <label className="form-label" htmlFor="email">Full name</label>
                        <input
                            type="text" 
                            placeholder="Enter your full name" 
                            name ="fullName"
                            required
                            value = {formData.fullName}
                            onChange = {(e) => setFormData(prevData => ({...prevData, [e.target.name] : e.target.value}))}
                        />
                    </div>
                    <div className='form__data-container'> 
                        <label className="form-label" htmlFor="email">Email address</label>
                        <input
                            type="email" 
                            placeholder="Enter your email address" 
                            name ="email"
                            value = {formData.email}
                            onChange = {(e) => setFormData(prevData => ({...prevData, [e.target.name] : e.target.value}))}
                            required
                        />
                        {formErrorMsg.type === 1 && <small style={{color: 'red'}}>{formErrorMsg.message}</small>}
                    </div>
                    <div className='form__data-container'> 
                        <div> 
                            <label className="form-label" htmlFor="password">Password </label>
                        </div>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            name="password" 
                            value={formData.password}
                            onChange = {(e) => setFormData(prevData => ({...prevData, [e.target.name] : e.target.value}))}
                            required
                        />
                        <input 
                            className='confirm-pwd'
                            type="password" 
                            placeholder="Confirm your password" 
                            name="confirmPwd" 
                            value={formData.confirmPwd}
                            onChange = {(e) => setFormData(prevData => ({...prevData, [e.target.name] : e.target.value}))}
                            required
                        />
                        {formErrorMsg.type === 2 && <small style={{color: 'red'}}>{formErrorMsg.message}</small>}
                    </div>
                    <button className="login-button"> Sign up</button>
                </form>
            </div>
            {isRegistered && <Navigate to="/login"/>}
        </section>
    )
}
export default SignUp; 