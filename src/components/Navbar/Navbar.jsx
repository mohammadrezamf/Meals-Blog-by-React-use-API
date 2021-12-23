import React from 'react'
import './navbar.css'

function Navbar(){

    return (
        <div style={{backgroundColor:"#fff44f"}}>
            <h1>React meals</h1>
            <a style={{margin:"10px" , color:"white"}}>Home </a>
            <a style={{margin:"10px" , color:"white"}}>Order</a>
            <a style={{margin:"10px" , color:"white"}}>contact US</a>
        </div>
    )
}

export default Navbar;