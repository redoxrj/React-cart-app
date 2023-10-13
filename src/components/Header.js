import React from 'react'
import '../styles/header.scss'
import {Link} from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'
import {useSelector} from 'react-redux'


const Header = () => {  
  const {cartItems} = useSelector(state=>state.cart)
  return ( 
    <>
    <nav>
        <h1>CART LOGO</h1>
        <main>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>
                <FiShoppingBag/>
                <p>{cartItems.length}</p>
                </Link>
        </main>
    </nav>
      
    </>
  )
}

export default Header
