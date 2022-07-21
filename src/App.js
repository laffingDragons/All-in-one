import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Backgrounds from './components/Backgrounds';
import CountriesList from './components/CountriesList';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import HomeCard from './components/HomeCard';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
          <Route path='backgrounds' element={<Backgrounds/>}/>
        <Route path='/country' element={<CountriesList/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
