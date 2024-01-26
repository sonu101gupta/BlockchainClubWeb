import React from 'react'
import {Link} from "react-router-dom"

import {HashLink} from "react-router-hash-link"
// import "./style/.header.scss"
const Header = () => {
  return (
    <nav>
        <h1>BCC Club</h1>
        <main>
            <HashLink to={"/#Home"}>Home</HashLink>
            <Link to={"/Contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/Services"}>Services</HashLink>
        </main>
    </nav>
  )
}

export default Header