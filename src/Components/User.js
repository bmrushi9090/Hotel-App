import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from './Footer'

const User = () => {
    const [name, setName] = useState()
    const [food, setFood] = useState("")
    const [city, setCity] = useState("")
    const [number, setNumber] = useState("")
    // const [email, setEmail] = useState("")
    const [userInfo, setUserInfo] = useState([])

    const handleUser = () => {
        axios.post('http://localhost:9000/User', {
            name: name,
            food: food,
            city: city,
            number: number

        })
            .then(e => console.log(e))
            .catch(e => console.log(e))
        setTimeout(() => {
            alert(`Order Successfully..!`)
        }, 100);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:9000/get');
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [userInfo]);



    return (
        <>
            <div className='User-data f2'>
                <h1 className='veg-h f1'>Customer's Order's : </h1>
                <div className="UserF">
                    <strong>Name :</strong>  <input className='uinput' type="text" placeholder='Enter Name..' onChange={(e) => { setName(e.target.value) }} /> <br />
                    <strong>Food To Order :</strong> <input className='uinput' type="text" placeholder='Enter Food To Order..' onChange={(e) => { setFood(e.target.value) }} /> <br />
                    <strong>City :</strong> <input className='uinput' type="text" placeholder='Enter City..' onChange={(e) => { setCity(e.target.value) }} /> <br />
                    <strong>Phone No :</strong> <input className='uinput' type="text" placeholder='Enter Phone No..' onChange={(e) => { setNumber(e.target.value) }} /> <br />
                    <button type='button' className='ubtn' onClick={handleUser}>Order Now</button>
                </div>
            </div>

            {
                userInfo.length === 0
                    ?
                    <div> <h4 className='veg-h f1'>No Order's : </h4></div>
                    :
                    <ul className='UData f2'>
                        {/* <h4 >DataBase Info : </h4> <br /> */}
                        {
                            userInfo.map((data, index) => (
                                <div>
                                    <li className='demoU' key={index}>
                                        <p><strong>Name : </strong> {data.name}</p>
                                        <p><strong>Food : </strong> {data.food}</p>
                                        <p><strong>City : </strong> {data.city}</p>
                                        <p><strong>Phone No : </strong> {data.number}</p>
                                        {/* <p>Order Pending</p> */}
                                    </li>
                                </div>
                            ))
                        }
                    </ul>
            }
            <Footer />
        </>
    )
}

export default User