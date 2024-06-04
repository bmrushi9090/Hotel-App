import React, { useEffect } from 'react'
import Footer from './Footer'
import { useSelector, useDispatch } from 'react-redux'
import { removeVegCart } from '../features/VegSlice'
import { vegCartTotal } from '../features/VegSlice'
import { increaseVegQuantity } from '../features/VegSlice'
import { decreaseVegQuantity } from '../features/VegSlice'

const Cart = () => {
  const { vegCart, totalPrice, totalQuantity } = useSelector((state) => state.vegCart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(vegCartTotal())
  }, [vegCart])

  return (
    <>
      <>
        <h3 className='veg-h f1'>Selected Cart Item : {vegCart.length}</h3></>
      <div className="f2">
        {/* <h3 className="veg-h f1">Selected Cart Item : {vegCart.length}</h3> */}
        <div className="veg-h f1 cartTotal">
          <p>Total Quantity : {totalQuantity}</p>
          <p>Total Cart Price : ₹ {totalPrice}</p>
        </div>
        <ul className="selected-cart-item" >
          {vegCart.map((item, index) => (
            <li key={index}>
              <div className="card cart-m" style={{ width: '18rem ', height: '400px' }} >
                {item.img1}
                {/* <div> */}
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.type}</p>
                  <p>{item.price}</p>

                  <button className='reduceItem' onClick={() => dispatch(decreaseVegQuantity(item.id))}  >-</button> {item.quantity} <button className='IncreaseItem' onClick={() => dispatch(increaseVegQuantity(item.id))} >+</button>
                  <button onClick={() => dispatch(removeVegCart(item.id))} type="button" className="btn btn-danger">Remove From Cart</button>
                </div>
              </div>
            </li>

          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Cart