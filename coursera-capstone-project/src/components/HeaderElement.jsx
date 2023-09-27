import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Logo from "../components/assets/logo.jpg"



const Navbar=()=>{
    return (
        <div>
            <div className="">
            <div>
            <Link to="/">{<img className="logo-img" src = { Logo } alt = "Little Lemon logo" />}</Link>
            </div>
            <div>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Menu</Link></li>
                <li><Link to="/reservation">Reservation</Link></li>
            </div>
            </div>
        </div>
    )
}

export default Navbar;