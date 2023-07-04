import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from "../assets/banner.jpg"

const Home = () => {
  return (
    <div className='home'>
        <div className='headerContainer' style={{backgroundImage:`url(${BannerImage})`}}>
            <h1>Burger 02</h1>
            <p>Delicious Hamburgers <br /> with 02 Spicy Mixed</p>
            <Link to="/menu"><button>Order Now</button></Link>
        </div>
    </div>
  )
}

export default Home;