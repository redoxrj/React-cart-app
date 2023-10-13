import React from 'react'
import '../styles/cart.scss';
import {AiFillDelete}  from 'react-icons/ai'
import {useSelector,useDispatch} from 'react-redux'

const Cart = () => {
  const {cartItems} = useSelector(state=>state.cart)
  const {subTotal,total,shipping,tax} = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const increment =(id)=>{
    dispatch({
      type : 'addToCart',
      payload : {id} // bhejngey object hi but baaki ka data ni sirf ye wala
    })
    dispatch({
      type : 'calculate'
    })
  
  }
  const decrement =(id)=>{
    dispatch({
      type : 'decrement',
      payload : id
    })
    dispatch({
      type : 'calculate'
    })
  
  }
  const deleteHandler =(id)=>{
    dispatch({
      type : 'deleteFromCart',
      payload : id
    })
    dispatch({
      type : 'calculate'
    })
  
  }
  return (
    <>
      <div className='cart'>

        <main>
        {cartItems.length>0? cartItems.map((item)=>(
          <CartItem key={item.id} id={item.id}img ={item.img} name={item.name} price={item.price} quantity={item.quantity} increment={increment} decrement={decrement} deleteHandler={deleteHandler}/>
        )) : <>
        <h1>No Items in Cart</h1>
        </>}

        
        </main>

        <aside>
            <h2>SubTotal: ${subTotal}</h2>
            <h2>Shipping: ${shipping}</h2>
            <h2>Tax: ${tax}</h2>
            <h2>Total: ${total}</h2>
        </aside>

      </div>
    </>
  )
}

const CartItem =({id,img,name,price,quantity,increment,decrement,deleteHandler})=>(
    <div className="cartItem">
        <img src={img} alt={name} />
        <article>
            <p>{name}</p>
            <p>$ {price}</p>
        
        </article>
        <div>
            <button onClick={()=>increment(id)}>+</button>
            <p>{quantity}</p>
            <button onClick={()=>decrement(id)}>-</button>

        </div>
        <AiFillDelete onClick={()=>deleteHandler(id)}/>
    </div>
   
    
)

export default Cart
