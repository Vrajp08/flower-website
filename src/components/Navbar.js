import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <header>

                <input type="checkbox" name="" id="toggler" />
                <label htmlFor="toggler" className="fas fa-bars"></label>

                <Link to="/home" className="logo">flower<span>.</span></Link>

                <nav className="navbar">
                    <Link to="/home">home</Link>
                    <Link to="/about">about</Link>
                    <Link to="/products">products</Link>
                    <Link to="/review">review</Link>
                    <Link to="/contact">contact</Link>

                </nav>

                <div className="icons">
                    <Link to="/home" className="fas fa-heart"></Link>
                    <Link to="/home" className="fas fa-shopping-cart"></Link>
                    <Link to="/home" className="fas fa-user"></Link>
                </div>

            </header>
        </>
        )
    
}
