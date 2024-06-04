import { useState, createContext, useEffect, useContext, } from "react";
import Cart from './Cart'
import { Cartcont } from "../Context/CartContext";
import NavBar from "./NavBar";
import axios from 'axios';
import User from "./User";
import Footer from "./Footer";
import { addToCart } from "../features/VegSlice";

import { useDispatch } from "react-redux";


const Veg = (props) => {
    const dispatch = useDispatch()
    const Veg = [
        {
            id: 1,
            img1: <img src="https://selvelglobal.com/cdn/shop/articles/indian-street-vegetarian-fast-food-pav-bhaji-its-made-by-potato-peas-fine-flour-other-indian-spices_57665-8130.png?v=1648116720" alt="" />,
            name: 'Pav Bhaji',
            price: 349,
            type: 'Veg',
            quantity: 1
        },
        {
            id: 2,
            img1: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Kolhapuri_Misal_Pav.jpg" alt="" />,
            name: 'Misal Pav',
            price: 229,
            type: 'Veg',
            quantity: 1
        },
        {
            id: 3,
            img1: <img src="https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,
            name: 'Paneer Tika',
            price: 969,
            type: 'Veg',
            quantity: 1
        },
        {
            id: 4,
            img1: <img src="https://cdn.create.vista.com/api/media/medium/329965304/stock-photo-vegetarian-paneer-biryani-panir-pulav-popular-indian-food?token=" alt="" />,
            name: 'Veg Biryani',
            price: 1299,
            type: 'Veg',
            quantity: 1
        },
        {
            id: 5,
            img1: <img src="https://t4.ftcdn.net/jpg/01/84/58/83/240_F_184588398_RczrKKQfy5GZWSd1rvCYu6GEPlsCd9rv.jpg" alt="" />,
            name: 'Dal Makhani',
            price: 449,
            type: 'Veg',
            quantity: 1
        },
        {
            id: 6,
            img1: <img src="https://www.aromaandessence.com/wp-content/uploads/2023/05/Malai-kofta.webp" alt="" />,
            name: 'Malai Kofta',
            price: 199,
            type: 'Veg',
            quantity: 1
        },
        {
            id: 7,
            img1: <img src="https://c.ndtvimg.com/2023-04/oo2r2eb8_aloo-paratha_625x300_28_April_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738" alt="" />,
            name: 'Aloo Paratha',
            price: 690,
            type: 'Veg',
            quantity: 1
        },
        {
            id: 8,
            img1: <img src="https://recipes.net/wp-content/uploads/2022/07/puran-poli-1536x1024.jpg" alt="" />,
            name: 'Puran Poli',
            price: 1799,
            type: 'Veg',
            quantity: 1
        }
    ]



    const [cart, setCart] = useState(0)
    const [buyNow, setbuyNow] = useState([])
    const [cartItem, setCartItem] = useState([]);
    const [itemQuantity, setitemQuantity] = useState(1)
    const [vegFilter, setVegFilter] = useState([])


    // const userContext = createContext();

    // <userContext.Provider value={cart}>
    //     <Cart cart={cart} />
    // </userContext.Provider>



    // useEffect(() => {
    const handleAddToCart = (item) => {
        // const response = axios.post('http://localhost:9000/add', { cartItem: cartItem });
        // console.log(response.item)
        // Logic for add to cart
        setCart(prevcart => prevcart + 1)
        setCartItem([...cartItem, item])

        // Backend API ADDTOCARt
        // axios.post('http://localhost:9000/Addtocart', {
        //     fname: cartItem.name,
        //     fprice: cartItem.price,
        //     ftype: cartItem.type

        // })
        //     .then(e => console.log(e))
        //     .catch(e => console.log(e))


        // setTimeout(() => {
        // alert(` ${item.name} is Add To Cart..!!`)
        // }, 100);
        // const filtered = Veg.filter(e => Veg)
        // const productToAdd = Veg.find((product) => product.id === productId)
        // setDish([...dish, productToAdd ])
        // const abc = dish.filter((value => value.event.dish))
    }
    // }, [])

    // const handleRemoveToCart = () => {
    //     setCart(prevcart => cart !== 0 ? prevcart - 1 : 0)
    // }

    const handleRemoveCart = (index) => {
        const newCart = [...cartItem]
        newCart.splice(index, 1)
        setCartItem(newCart)
        setCart(cart - 1)
    }



    const handleBuyNow = (item) => {
        // setbuyNow(prevbuynow=> {})
        setbuyNow([...buyNow, item])
        alert('Order sucessfully...!!')
    }


    const handleRuduceQuantity = (id) => {
        setitemQuantity(prevItemQuantity => itemQuantity.id !== 1 ? prevItemQuantity - 1 : 1)
    }

    const handleIncreaseQuantity = (id) => {
        setitemQuantity(itemQuantity + 1)
    }

    useEffect(() => {
        setCart(cart)
    }, [])

    const handleLowFilter = () => {
        const lowFilter = Veg.filter((dish) => {
            return dish.price <= 500
        })
        console.log(lowFilter);
        setVegFilter(lowFilter)
    };

    const handleMediumFilter = () => {
        const mediumFilter = Veg.filter((dish) => {
            return dish.price < 1000 && dish.price > 499
        })
        console.log(mediumFilter)
        setVegFilter(mediumFilter)
    }

    const handleHighFilter = () => {
        const highFilter = Veg.filter((dish) => {
            return dish.price < 2000 && dish.price > 1000
        })
        console.log(highFilter)
        setVegFilter(highFilter)
    }






    return (
        <>





            <div className="f2">
                <h2 className='veg-h f1'>Veg</h2>
                <button onClick={() => handleLowFilter()} className="filter btn-f btn-r">Price 99 - 500</button>
                <button onClick={() => handleMediumFilter()} className="filter btn-f btn-y">Price 500 - 1000</button>
                <button onClick={() => handleHighFilter()} className="filter btn-f btn-g">Price 1000 - 2000</button>


                <ul className='veg'>
                    {Veg.map((f, index, id) => (
                        <li key={index} type='none' className='mr'>
                            <div className="card" style={{ width: '18rem ', height: '400px' }} >
                                {/* style="width: 18rem;" */}
                                {f.img1}
                                <div className="card-body">
                                    <h5 className="card-title">{f.name}</h5>
                                    <p className="card-text">{f.type}</p>
                                    <p className="card-text">{f.price}</p>
                                    {/* <button onClick={() => handleAddToCart(Veg[index])} type="button" className="btn btn-warning">Add to Cart</button> */}
                                    <button onClick={() => dispatch(addToCart(f))} type="button" className="btn btn-warning">Add to Cart</button>
                                    <button onClick={() => handleBuyNow(id)} type="button" className="btn btn-success">Buy Now</button>
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
                    {vegFilter.map((a, index, id) => (
                        <li key={index}>
                            <div className="card cart-m" style={{ width: '18rem ', height: '400px' }} >
                                {a.img1}
                                {/* <div> */}
                                <div className="card-body">
                                    <p>{a.name}</p>
                                    <p>{a.type}</p>
                                    <p>{a.price}</p>
                                    <button onClick={() => handleAddToCart(vegFilter[index])} type="button" className="btn btn-warning">Add to Cart</button>
                                    <button onClick={() => handleBuyNow(id)} type="button" className="btn btn-success">Buy Now</button>
                                </div>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>

            {/* {!lowFilter ? */}

            <div className="f2">
                <h3 className="veg-h f1">Selected Cart Item's : {cart}</h3>
                <ul className="selected-cart-item" >
                    {cartItem.map((a, index) => (
                        <li key={index}>
                            <div className="card cart-m" style={{ width: '18rem ', height: '400px' }} >
                                {a.img1}
                                {/* <div> */}
                                <div className="card-body">
                                    <p>{a.name}</p>
                                    <p>{a.type}</p>
                                    <p>{a.price}</p>

                                    <button className='reduceItem' onClick={() => handleRuduceQuantity(Veg[index])} >-</button> {itemQuantity} <button className='IncreaseItem' onClick={() => handleIncreaseQuantity(Veg[index])}>+</button>


                                    <button onClick={() => handleRemoveCart(index)} type="button" className="btn btn-danger">Remove From Cart</button>
                                    {/* <button onClick={handleRemoveCartItem()} >Remove Cart</button> */}
                                </div>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
            {/* : */}

            {/* // } */}

            <Footer />
        </>
    )
}

export default Veg