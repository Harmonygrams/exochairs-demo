import './App.css';
import {Collections, Deadend, Header, Login, Product, Signup} from './components/index'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className='app'>
      <Routes> 
        <Route path="/" element={<Header />}/>
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Signup />} />
        <Route path="/product/" element={<Product />} />
        <Route path="*" element={<Deadend />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </div>
  );
}
export default App;
