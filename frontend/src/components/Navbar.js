import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUser, setUserLogoutState } from "../features/userSlice";
import "../css/Navbar.css";

function Navbar() {
    let Navigate = useNavigate();
    const logo = require("../css/Logo.png");
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.setItem("token", "");
        dispatch(
            setUserLogoutState({
                token: null,
                user: null,
            })
        );
        Navigate("/");
    };
    console.log("Navbar ", user);
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light yellowNavbar'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                    <img className='logo-image' src={logo} alt='' />
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link
                                to='/'
                                className='nav-link'
                                aria-current='page'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/contact'
                                className='nav-link'
                                aria-current='page'>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/order'
                                className='nav-link'
                                aria-current='page'>
                                Order
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/technology-stack'
                                className='nav-link'
                                aria-current='page'>
                                Technology Stack
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/services'
                                className='nav-link'
                                aria-current='page'>
                                Services
                            </Link>
                        </li>
                        {/* 
                        {!user?.normal_user ? (
                            <li className='nav-item'>
                                <Link
                                    to='/list-submitted'
                                    className='nav-link'
                                    aria-current='page'>
                                    List of Submitted Application
                                </Link>
                            </li>
                        ) : (
                            ""
                        )}
                        {!user?.normal_user ? (
                            <li className='nav-item'>
                                <Link
                                    to='/view-submitted'
                                    className='nav-link'
                                    aria-current='page'>
                                    View Submitted Application
                                </Link>
                            </li>
                        ) : (
                            ""
                        )} */}

                        <li className='nav-item'>
                            <button
                                onClick={handleLogout}
                                type='button'
                                className='btn btn-secondary'>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
