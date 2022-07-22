import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Backgrounds from './components/Backgrounds';
// import  from './components/CountriesList';
// import ErrorPage from './components/ErrorPage';
// import Home from './components/Home';
// import HomeCard from './components/HomeCard';
const Home = React.lazy(() => import('./components/Home'));
const Backgrounds = React.lazy(() => import('./components/Backgrounds'));
const CountriesList = React.lazy(() => import('./components/CountriesList'));
const ErrorPage = React.lazy(() => import('./components/ErrorPage'));
const HomeCard = React.lazy(() => import('./components/HomeCard'));
const Counter = React.lazy(() => import('./components/Counter'));



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<React.Suspense fallback={<>...Try again</>}>
          <Home />
        </React.Suspense>} ></Route>

        <Route path='backgrounds' element={<React.Suspense fallback={<>...Try again</>}>
          <Backgrounds />
        </React.Suspense>} />

        <Route path='counter' element={<React.Suspense fallback={<>...Try again</>}>
          <Counter />
        </React.Suspense>} />

        <Route path='/country' element={<React.Suspense fallback={<>...Try again</>}>
          <CountriesList />
        </React.Suspense>} />

        <Route path='*' element={<React.Suspense fallback={<>...Try again</>}>
          <ErrorPage />
        </React.Suspense>} />

      </Routes>
    </BrowserRouter>
  )
}
