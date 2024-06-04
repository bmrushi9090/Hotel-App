import React, { useState } from 'react'
import axios from 'axios'
import Footer from './Footer'

const Contact = () => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [feedback, setFeedback] = useState("")

  const handleFeedback = () => {
    axios.post('http://localhost:9000/Contact', {
      name: name,
      number: number,
      feedback: feedback

    })
      .then(e => console.log(e))
      .catch(e => console.log(e))
    setTimeout(() => {
      alert(`Response Save..!`)
    }, 100);
  }
  return (
    <>
      <div className='User-data f2 contact-data'>
        <h1 className='veg-h f1'>Feedback : </h1>
        <div className='veg-h f-width '>
          <p>We value your feedback! Whether you have a question, suggestion, or just want to say hello, we're here to listen. Please feel free to reach out to us using any of the methods below. Your input helps us improve and better serve your needs.</p>
        </div>
        <div className="UserF">
          <strong>Name :</strong>  <input className='uinput' type="text" placeholder='Enter Name..' onChange={(e) => { setName(e.target.value) }} /> <br />
          <strong>Number :</strong> <input className='uinput' type="text" placeholder='Enter Number..' onChange={(e) => { setNumber(e.target.value) }} /> <br />
          <strong>Feedback :</strong> <textarea rows="2" cols="30" className='uinput' type="text" placeholder='Enter Feedback..' onChange={(e) => { setFeedback(e.target.value) }} /> <br />
          <button type='button' className='ubtn' onClick={handleFeedback}>Submit</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact