import React from 'react';
import { Component } from "react";
import "./NavbarStyles.css";


const Navbar = () => {
  return (
    <>
        <nav>
            <a href="#">
                <img src="http://img.logoipsum.com/247.svg" alt=""/>
            </a>
            <div>
                <ul>
                    <li> <a href="">About</a> </li>
                    <li> <a href="">Tech Stacks</a> </li>
                    <li> <a href="">Github Stats</a> </li>
                    <li> <a href="">Projects</a> </li>
                    <li> <a href="">Contact</a> </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar