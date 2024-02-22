import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import './firebase/index.js'
ReactDOM.createRoot(document.getElementById('root')).render(
    
    <>
    <Navbar/>
    <App />
    <Footer/>
    </>
)
