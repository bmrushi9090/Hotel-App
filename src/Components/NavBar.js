import { Link } from "react-router-dom"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { vegCartTotal } from "../features/VegSlice"

const NavBar = () => {
  const { vegCart } = useSelector((state) => state.vegCart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(vegCartTotal)
  }, [vegCart])

  return (
    <div className="f2">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand nav-tag f1" to="/veg">Hotel Grand RS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-tag">
                <Link className="nav-link  nav-tag" aria-current="page" to="/veg">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-tag" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-tag" to="/Contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-tag" to="/Cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg> : <strong>{vegCart.length}</strong> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-tag" to="/Veg">Veg</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-tag" to="/NonVeg">NonVeg</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-tag" to="/User">Order Now</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar