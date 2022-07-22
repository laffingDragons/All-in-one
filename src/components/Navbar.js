import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { matchRoutes, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";



export default function Navbar() {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    console.log("🚀 ~ Navbar ~ pathname", pathname);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top " style={{ "backgroundImage": "url(https://userscontent2.emaze.com/images/f9538183-0ff9-478f-b964-c8ab90421e3b/3d28e192fda5c17250f96a2779c84475.jpg)"}}>
            <div className="container-fluid">
                {pathname == '/' ? 
                <NavLink   className="navbar-brand" to="/">All Stars</NavLink>
                :
                <div   className="navbar-brand" onClick={()=>{navigate(-1)}}><FaArrowLeft/></div>
                }
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink  className="nav-link " to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/country">Countries List</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn " type="submit" style={{"border" : "1px solid #3e3", "color" : "#3e3"}}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
