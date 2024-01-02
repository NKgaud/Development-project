import React, { useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Header() {

  const redirect = useNavigate();
  // useEffect(()=>{
  //   if (!localStorage.getItem('admin_id')) {
  //     return redirect('/');
  //   }
  // },[]);
  const logout = () => {
    localStorage.removeItem('customer_id');
    localStorage.removeItem('customer_name');
    toast.success('logout sucess');
    return redirect('/Login')
  }

  return (
    <div>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
            <h1><NavLink className="navbar-brand" to="index">
              <span className="w3yellow">C<i className="fab fa-asymmetrik" />r </span>Transko
            </NavLink></h1>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav ms-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link scroll" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link scroll" to="/Login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link scroll" to="/Signup">Signup</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link scroll" to="/profile">Profile</NavLink>
                </li>
                <li className="nav-item">
                  {(() => {
                    if (localStorage.getItem('customer_id')) {
                      return (
                        <div className='nav-link'>
                          <Link to="javascript:void(0)" onClick={logout}
                            className="nav-item">Logout</Link>
                        </div>
                      )

                    } else {
                      return (
                        <div className='nav-link'>
                          <Link to="/login"
                            className="nav-item">Login</Link>
                        </div>
                      )
                    }
                  })()}
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link scroll" to="/service">Services</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="/Pages" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Drop Down <span className="fa fa-angle-down ms-1" />
                  </NavLink>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><NavLink className="dropdown-item pt-2 scroll" to="/stats">stats</NavLink></li>
                    <li><NavLink className="dropdown-item scroll" to="/team">Team</NavLink></li>
                    <li><NavLink className="dropdown-item scroll" to="/gallery">Gallery</NavLink></li>
                    <li><NavLink className="dropdown-item scroll" to="/pricing">Pricing</NavLink></li>
                    <li><NavLink className="dropdown-item scroll" to="/blog">Blog Posts</NavLink></li>
                    {/* <NavLink href="javascript:void(0)" onClick={() => { return redirect('/Single_blog/' + value.id) }} className="btn btn-style" >Details</NavLink> */}
                    <li><NavLink className="dropdown-item scroll" to="/testimonials">Testimonials</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link scroll" to="/contact">Contact</NavLink>
                </li>
              </ul>
              {/*/search-right*/}
              <ul className="header-search me-lg-4">
                <div className="search-right">
                  <form action="" method="" className="search-box">
                    <input type="search" placeholder="Enter Keyword" name="search" required="required" autoFocus />
                    <button type="submit" className="btn"><span className="fas fa-search" aria-hidden="true" /></button>
                  </form>
                </div>
              </ul>
              {/*//search-right*/}
            </div>
            {/* toggle switch for light and dark theme */}
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun" />
                      <i className="gg-moon" />
                    </div>
                  </label>
                </div>
              </nav>
            </div>

            {/* //toggle switch for light and dark theme */}
          </nav>
        </div>
      </header>
    </div>

  )
}

export default Header