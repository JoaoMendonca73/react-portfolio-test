/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import '../styles/NavBar.css'
import { FaReact } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {BiMenuAltRight } from "react-icons/bi";




export default function NavBar() {
  return (
    <nav className='nav-container'>
      <div className='logo'><span className='react-icon'><FaReact/></span><img src="src/assets/images/logo/miguelDaMyllaLogo1.png" alt="logoImg" /></div>
      <ul>
      <NavLink to='./' className='navLinks'>Home</NavLink>
      <NavLink to='./about' className='navLinks'>About</NavLink>
      <NavLink to='./portfolio' className='navLinks'>Portfolio</NavLink>
      <NavLink to='./contact' className='navLinks'>Contact</NavLink>
      </ul>
      <div className="menu">
        <div className='open-button open'><BiMenuAltRight/></div>
        <div className='close-button'><IoMdClose/></div>
      </div>

    </nav>
  )
}