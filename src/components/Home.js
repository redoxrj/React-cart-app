import React from 'react'
import '../styles/home.scss'
import toast from 'react-hot-toast'
import {useDispatch} from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const products=[  // array of objects [king]
  {
    name:'MACBOOK PRO',
    id: '34335343f3f3ft',
    img: 'https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4',
    price : 900
  },
  {
    name:'bata Shoes',
    id: '90fgf5743f43f3ft',
    img: 'https://res.cloudinary.com/dxveabdbw/image/upload/v1695564320/products/kklz3mf7nxdpdigewxbu.jpg',
    price : 150
  },
  {
    name:'HP LAPTOP',
    id: '90fgf7753f3f3ft',
    img: 'https://res.cloudinary.com/dxveabdbw/image/upload/v1695564262/products/k1zpdtp4hhdxefqsqcft.jpg',
    price : 2300
  },
  {
    name:'wwe 2k23',
    id: '90fgf5747f3f3ft',
    img: 'https://res.cloudinary.com/dxveabdbw/image/upload/v1695564486/products/dlcf9csd69kijg45az6v.avif',
    price : 1000
  },
  {
    name:'armani t-shirt',
    id: '90fgf5143f3f3ft',
    img: 'https://res.cloudinary.com/dxveabdbw/image/upload/v1695564319/products/kqyykfb9kq79rwg6hatu.jpg',
    price : 200
  },
  {
    name:'women bottom',
    id: '90fgj5743f3f3ft',
    img: 'https://res.cloudinary.com/dxveabdbw/image/upload/v1695564316/products/fralfabmwmfiomcwxt2j.webp',
    price : 50
  },
  {
    name:'oneplus mobile',
    id: '90fgfl743f3f3ft',
    img: 'https://res.cloudinary.com/dxveabdbw/image/upload/v1695564263/products/ri4j8lmqe9o6aabcj8pp.jpg',
    price : 400
  },
  {
    name:'iphone 23',
    id: '95fgf1743f3f3ft',
    img: 'https://res.cloudinary.com/dxveabdbw/image/upload/v1695564264/products/o4v2nvmgyasi1lnkdrjp.jpg',
    price : 10000
  },
  {
    name:'canon camera',
    id: '90f8f5743f3f3ft',
    img: 'https://res.cloudinary.com/dxveabdbw/image/upload/v1695564317/products/njbe9vcgfcqyzqlltivc.jpg',
    price : 600
  },
 
  {
    name:'GUCHHI Shoes',
    id: '90fkf5743f3f3ft',
    img: 'https://cdn.anscommerce.com/image/tr:e-sharpen-01,h-822,w-940,cm-pad_resize/data/khadims/28-june-2023/67200240663_1.jpg',
    price : 770
  },
  
]

const addToCart =(options)=>{
  // console.log(options)
  dispatch({
    type : 'addToCart',
    payload : options
  })
  dispatch({
    type : 'calculate'
  })
  toast.success('Added to cart successfully')

}
  return (
    <>
    <div className='home'>
      {products.map((item)=>(
        <ProductCard key={item.id} name={item.name} img={item.img} price={item.price} id={item.id} handler={addToCart}  />
        // addToCart ka referrence bhejna hai jo uper bnayenegy
      ))}

    </div>
      
    </>
  )
}

const ProductCard=({name,id,img,handler,price})=>(
  <div className="productCard">
    <img src={img} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=>handler({name,id,price,quantity:1,img})}>Add to Cart</button>
  </div>
   
)


export default Home
