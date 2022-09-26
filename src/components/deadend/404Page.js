import {Link, Navigate} from 'react-router-dom'
import {useState } from 'react'
const Deadend = () => {
    const [redirect, setRedirect ] = useState(false)
    setInterval(() => {
        setRedirect(true)
    }, 2000)
    return(
        <div> 
            <h2> Ooops! Resource not found </h2>
            <p>Going back to <Link to="/">home</Link></p>
            {redirect && <Navigate to="/"/>}
        </div>
    )
}
export default Deadend; 