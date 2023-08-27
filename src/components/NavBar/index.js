import React from 'react';
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
import './NavBar.css';
import {
    faBlog,
    faBuilding,
    faHome,
    faPlane, faPlaneCircleExclamation,
    faPlaneDeparture, faPlaneUp,
    faSearch,
    faTicket
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavUnlisted = styled.ul`

  display: flex;
  flex-direction: row;
  max-width: 100vw;
  justify-content: space-between;
  height: 5vh;

  list-style: none;
  padding: 0;

  border: 1px solid darkcyan;
  
  padding-bottom: 1em;
  padding-top: 1em;

  a {
    text-decoration: none;
    color: cyan;
  }

  li {
    color: white;
    margin: 0 0.8rem;
    font-size: 1.1rem;
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
            <div className="nav-links-div">
                <li className="nav-bar-link">
                    <Link  to="/"><FontAwesomeIcon icon={faHome}/></Link >
                </li>
                <li className="nav-bar-link">
                    <NavLink className="nav-bar-link-edit"  to="/wip">Airports <FontAwesomeIcon icon={faBuilding} className="link-fa-icon"/></NavLink >
                </li>
                <li className="nav-bar-link">
                    <NavLink className="nav-bar-link-edit"   to="/search">Flights <FontAwesomeIcon icon={faPlaneDeparture} className="link-fa-icon"/></NavLink >
                </li>
                <li className="nav-bar-link">
                    <NavLink className="nav-bar-link-edit"   to="/wip">Airlines <FontAwesomeIcon icon={faTicket} className="link-fa-icon"/></NavLink >
                </li>
                <li className="nav-bar-link">
                    <NavLink className="nav-bar-link-edit"   to="/wip">Planes <FontAwesomeIcon icon={faPlaneUp} className="link-fa-icon"/></NavLink >
                </li>
                <li className="nav-bar-link">
                    <NavLink className="nav-bar-link-edit"   to="/blogs">Blogs <FontAwesomeIcon icon={faBlog} className="link-fa-icon"/></NavLink >
                </li>
            </div>
            <li className="nav-bar-link-header"><FontAwesomeIcon icon={faPlane}/> AeroSage</li>

        </NavUnlisted>
    )
}

export default NavBar