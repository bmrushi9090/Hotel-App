import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/VegSlice'

const NonVeg = () => {
    const dispatch = useDispatch()
    const nonVeg = [
        {
            id: 1,
            img1: <img src="https://images.pexels.com/photos/12842265/pexels-photo-12842265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,
            name: 'Chicken Biryani',
            price: '360',
            type: 'NonVeg',
            quantity: 1
        },
        {
            id: 2,
            img1: <img src="https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_864,h_576,al_c,lg_1,q_85,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg" alt="" />,
            name: 'Hyderabadi Biryani',
            price: '1210',
            type: 'NonVeg',
            quantity: 1
        },
        {
            id: 3,
            img1: <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/6a/06/b4/mutton-kebab.jpg" alt="" />,
            name: 'Mutton Kebab',
            price: '730',
            type: 'NonVeg',
            quantity: 1
        },
        {
            id: 4,
            img1: <img src="https://images.pexels.com/photos/4702637/pexels-photo-4702637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,
            name: 'Fish Fry',
            price: '1499',
            type: 'NonVeg',
            quantity: 1
        },
        {
            id: 5,
            img1: <img src="https://as2.ftcdn.net/v2/jpg/03/13/35/73/1000_F_313357375_eI3nubCLdKLGOIbgNU6oDurVWg0u7j4b.jpg" alt="" />,
            name: 'Hyderabadi Chicken 65',
            price: '1990',
            type: 'NonVeg',
            quantity: 1
        },
        {
            id: 6,
            img1: <img src="https://as1.ftcdn.net/v2/jpg/05/46/66/46/1000_F_546664602_p68TdQKDKFH18P50QSSdUELdZrhWuBeO.jpg" alt="" />,
            name: 'Punjabi Chicken Korma',
            price: '250',
            type: 'NonVeg',
            quantity: 1
        },
        {
            id: 7,
            img1: <img src="https://www.rewriteyourstory.in/wp-content/uploads/2021/04/Malvani-Chicken-Curry.jpg" alt="" />,
            name: 'Malvani Chicken Curry',
            price: '599',
            type: 'NonVeg',
            quantity: 1
        },
        {
            id: 8,
            img1: <img src="https://www.foodandwine.com/thmb/nDBGGuZzVOHIUkLT_fWorNv3nS8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg" alt="" />,
            name: 'Chicken Kolhapuri',
            price: '1799',
            type: 'NonVeg',
            quantity: 1
        },
    ]


    const [cartItem, setCartItem] = useState([])
    const [cart, setCart] = useState(0)
    const [itemQuantity, setitemQuantity] = useState(1)
    const [nonVegFilter, setNonVegFilter] = useState([])

    const handleAddToCart = (item) => {
        // Add to cart logic
        setCartItem([...cartItem, item])
        setCart(prevcart => prevcart + 1)
    }

    const handleRemoveCart = (index) => {
        const newCart = [...cartItem]
        newCart.splice(index, 1)
        setCartItem(newCart)
        setCart(prevcart => prevcart - 1)
    }

    const handleBuyNow = (item) => {
        // setbuyNow(prevbuynow=> {})
        // setbuyNow([...buyNow, item])
        alert('Order sucessfully...!!')
    }

    const handleRuduceQuantity = () => {
        setitemQuantity(prevItemQuantity => itemQuantity !== 1 ? prevItemQuantity - 1 : 1)
    }

    const handleIncreaseQuantity = () => {
        setitemQuantity(itemQuantity + 1)
    }


    const handleLowFilter = () => {
        const lowFilter = nonVeg.filter((dish) => {
            return dish.price < 500
        })
        console.log(lowFilter)
        setNonVegFilter(lowFilter)
    }


    const handleMediumFilter = () => {
        const mediumFilter = nonVeg.filter((dish) => {
            return dish.price < 1000 && dish.price > 500
        })
        console.log(mediumFilter)
        setNonVegFilter(mediumFilter)
    }


    const handleHighFilter = () => {
        const highFilter = nonVeg.filter((dish) => {
            return dish.price < 2000 && dish.price > 1000
        })
        console.log(highFilter)
        setNonVegFilter(highFilter)
    }

    useEffect(() => {
        setCart(cart)
    }, [])

    return (
        <>
            <div className='f2'>
                <h2 className='non-v f1'>Non Veg</h2>
                {/* <h1>Well Come To Hotel Grand RS</h1> */}
                <button onClick={() => handleLowFilter()} className="filter btn-f btn-r">Price 99 - 500</button>
                <button onClick={() => handleMediumFilter()} className="filter btn-f btn-y">Price 500 - 1000</button>
                <button onClick={() => handleHighFilter()} className="filter btn-f btn-g">Price 1000 - 2000</button>
                <ul className='nonveg'>
                    {
                        nonVeg.map((n, index, id) => (
                            <li key={index} type='none' className='mr' >
                                <div>

                                    <div className='card' style={{ width: '18rem ' }} >
                                        {/* style="width: 18rem;" */}
                                        {n.img1}
                                        <div className="card-body">
                                            <h5 className="card-title">{n.name}</h5>
                                            <p className="card-text">{n.type}</p>
                                            <p className="card-text">{n.price}</p>
                                            <button onClick={() => dispatch(addToCart(n))} type="button" className="btn btn-warning">Add to Cart</button>
                                            <button onClick={() => handleBuyNow(nonVeg[index])} type="button" className="btn btn-success">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="f2">
                <h3 className="veg-h f1">Filtered Item's :</h3>
                <ul className="selected-cart-item" >
                    {nonVegFilter.map((a, index, id) => (
                        <li key={index}>
                            <div className="card cart-m" style={{ width: '18rem ', height: '400px' }} >
                                {a.img1}
                                {/* <div> */}
                                <div className="card-body">
                                    <p>{a.name}</p>
                                    <p>{a.type}</p>
                                    <p>{a.price}</p>

                                    {/* <button className='reduceItem' onClick={() => handleRuduceQuantity(Veg[index])} >-</button> {itemQuantity} <button className='IncreaseItem' onClick={() => handleIncreaseQuantity(Veg[index])}>+</button> */}
                                    <button onClick={() => handleAddToCart(nonVegFilter[index])} type="button" className="btn btn-warning">Add to Cart</button>
                                    <button onClick={() => handleBuyNow(id)} type="button" className="btn btn-success">Buy Now</button>
                                </div>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>


            <div>
                <h3 className="veg-h f1">Selected Cart Item's : {cart}</h3>
                <ul className="selected-cart-item" >
                    {cartItem.map((n, index) => (
                        <li key={index}>
                            <div className="card cart-m" style={{ width: '18rem ', height: '400px' }} >
                                {n.img1}
                                <div className="card-body">
                                    <p>{n.name}</p>
                                    <p>{n.type}</p>
                                    <p>{n.price}</p>

                                    <button className='reduceItem' onClick={() => handleRuduceQuantity(nonVeg[index])} >-</button> {itemQuantity} <button className='IncreaseItem' onClick={() => handleIncreaseQuantity(nonVeg[index])}>+</button>

                                    <button onClick={() => handleRemoveCart(index)} type="button" className="btn-rc btn btn-danger">Remove From Cart</button>
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

export default NonVeg