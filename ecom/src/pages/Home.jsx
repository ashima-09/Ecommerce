import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import Newsletter from "../components/Newsletter"


const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
