import './App.css';
import {Header, Deadend, Login, Signup} from './components/index'
import {Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <div className='app'>
      <Routes> 
        <Route path="/" element={<Header isAuthenticated={isAuthenticated}/>}/>
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Signup />} />
        <Route path="*" element={<Deadend />} />
      </Routes>
    </div>
  );
}
export default App;
