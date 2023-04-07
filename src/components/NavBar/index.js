import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`

  display: flex;
  max-width: 100vw;
  height: 5vh;

  border: 1px solid darkcyan;
  
  padding-bottom: 10px;
  padding-top: 10px;

  a {
    text-decoration: none;
    color: cyan;
  }

  li {
    color: white;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
  
`;
const NavBar = () => {
    return (
        <NavUnlisted>
            <li className="nav-bar-link">
                <NavLink  to="/">Home</NavLink >
            </li>
            <li className="nav-bar-link">
                <NavLink  to="/search">Search Flights</NavLink >
            </li>
        </NavUnlisted>
    )
}

export default NavBar