import React, { useState, useRef, useDeferredValue, useEffect, useMemo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { matchRoutes, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const BASE_URL = `https://restcountries.com/v3.1/name/`

export default function Navbar() {
    const [countriesList, setCountriesList] = useState();
    let countryInput = useRef();

    const navigate = useNavigate();
    const { pathname } = useLocation();

    let isLoading = false;

    useEffect(() => {

    }, [countryInput])

    function debounce(fn, delay = 300) {
        let timer;
        isLoading = true;
        setCountriesList([]);
        console.log("🚀 ~ debounce ~ isLoading", isLoading)
        return function () {
            clearTimeout(timer)
            timer = setTimeout(() => {
                searchCountry();
            }, delay);
        }()
    }

    let searchCountry = async () => {
        const name = countryInput.current.value;
        // console.log(countryInput.current.value);
        if (!name.length) {
            setCountriesList([]);
            isLoading = false;
        } else {
            await axios.get(`${BASE_URL}${name}`).then(result => {
                isLoading = false;
                console.log("🚀 ~ awaitaxios.get ~ result", result.data);
                setCountriesList(result.data);
                console.log("🚀 ~ searchCountry ~ isLoading", isLoading)

            },
                err => {
                    isLoading = false;
                    console.log("🚀 ~ searchCountry ~ err", err);
                })
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top " style={{ "backgroundImage": "url(https://userscontent2.emaze.com/images/f9538183-0ff9-478f-b964-c8ab90421e3b/3d28e192fda5c17250f96a2779c84475.jpg)" }}>
            <div className="container-fluid">
                {pathname == '/' ?
                    <NavLink className="navbar-brand" to="/">All Stars</NavLink>
                    :
                    <div className="navbar-brand" onClick={() => { navigate(-1) }}><FaArrowLeft /></div>
                }
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/">Home</NavLink>
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
                    <div className="d-flex position-relative" role="search">
                        <input className="form-control me-2" ref={countryInput} type="text" placeholder="Search" aria-label="Search" onChange={debounce} />
                        {countriesList ? <ul className="list-group position-absolute top-100">
                            {countriesList.map(country => {
                                return (
                                    <li key={country.name.common} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        {country.name.common || ''}
                                        <span className="">
                                            <img src={country.flags.svg || ''} width={"30px"} height={"20px"} />
                                        </span>
                                    </li>
                                )
                            })
                            }
                        </ul> : isLoading ?
                            <button className="btn btn-primary position-absolute top-100" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                            : ''}
                        <button className="btn " style={{ "border": "1px solid #3e3", "color": "#3e3" }} onClick={() => { setCountriesList(); countryInput.current.value = '' }}>Clear</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
