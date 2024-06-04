import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
    <>
      <div className='about-u f2'>
        <div className='Uabout User-About'>
          <h1 className='f1'>Online Hotel Management App</h1>
          <h4 className='PrTitle'>This Project Develop by</h4>
          <ul className='Uli'>
            <li>
              <strong>Rushikesh Haribhau Shelke</strong>
            </li>
            <li>
              <strong>Saurabh Rajendra Nichit</strong>
            </li>
          </ul>
          <p className='PName'>Project Requirements : </p>
          <p><strong>FrontEnd : </strong>HTML ,CSS,JavaScript</p>
          <p><strong>BackEnd : </strong>JavaScript</p>
          <p><strong>DataBase : </strong>MongoDb</p>
          <p><strong>Framework : </strong>React js , Express js</p>
          <p><strong>RunTime Enviroment : </strong>Node js</p>
          <p>Under the guidence of <strong>Dr.Dileep Baragade Sir.</strong></p>
          <p>In this project we implements the addToCart, buyNow functionality and display.</p>
          <p>We can also save the User information into the DataBase and display</p>
          <p>It is helpfull for save the user information securely into DataBase </p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About