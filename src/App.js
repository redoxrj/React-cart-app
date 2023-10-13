import './styles/app.scss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header.js'
import Home from './components/Home.js'
import {Toaster} from 'react-hot-toast'
import Cart from './components/Cart.js'
import './styles/mediaquery.scss'

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>

      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;
