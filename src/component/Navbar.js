import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="navbar-brand font-weight-bold mx-auto"><Link className="nav-link font-weight-bold text-dark" to="/">Exercise Tracker</Link></nav>
      
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link font-weight-bold" to="/">Exercises<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link font-weight-bold" to="/user">Create User</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link font-weight-bold" to="/create">Create Exercise</Link>
            </li>
          </ul>
          
        </div>
      </nav>
      
    )
}

export default Navbar
