import React from "react";
import { Outlet } from "react-router-dom";


function Root(){
    return(
        <>
        <div className="header">
        <h1>E-kart</h1>
        <p>Shop the Latest Trends and Timeless Classics Today!</p>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        </div>
        <Outlet/>
        <footer className="footer">
        <div className="container">
        <ul className="footer-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/location">Location</a></li>
        <li><a href="mailto:info@example.com">Email Us</a></li>
        </ul>
        </div>
        </footer>
        </>


    )
}

export default Root;  