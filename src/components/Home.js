import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./../css/Home.css"
import Header from './Header'
import HomeCard from './HomeCard'
import Navbar from './Navbar'



export default function Home() {
   

    return (
        <div>
            <Header />
            <Navbar />
            <HomeCard/>
            <Outlet/>
        </div>
    )
}
