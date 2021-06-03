import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../src/img/seo.png';

const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg ">
        <div className="row">
        <div className="col-10 mx-auto">

<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand " to="/">
    <img src={logo} alt="logo" width="25" height="20" className="d-inline-block align-text-top " />
    Ap Solutions
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/" exact>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
    </ul>
  </div>
  </div>
</nav>
</div>
</div>
</div> 
</>
    )
}

export default Navbar;
