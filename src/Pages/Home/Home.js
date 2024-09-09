import React from 'react'
import './Home.css'
import Navbar from '../../Components/Nabar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../Components/TitleCards/TitleCard'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <div className='Home'>
      <Navbar />

      <div className='hero'>
        <img src={hero_banner} alt='hero_banner' className='banner-img' />

        <div className='hero-caption'>
          <img src={hero_title} alt='' className='caption-img' />
          <p>A young fighter named Kham must go to Australia to retrieve his stolen elephant. With the help of a Thai-born Australian detective, Kham must take on all comers, including a gang led by an evil woman and her two deadly bodyguards.</p>
          <div className='hero-btns'>
            <button className='btn'><a href="https://www.youtube.com/embed/80dqOwAOhbo"><img src={play_icon} alt='' />Play </a></button>
            <button className='btn dark-btn'><a href='https://www.imdb.com/title/tt7668518/'><img src={info_icon} alt='' />More Info</a></button>
          </div>

          <TitleCard />
        </div>
      </div>

      <div className='more-cards'>
        <TitleCard title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCard title={"Only on Netflix"} category={"popular"}/>
        <TitleCard title={"Upcoming"} category={"upcoming"}/>
        <TitleCard title={"Top Picks for You"} category={"now_playing"}/>
      </div>

      <Footer />
      
    </div>
  )
}

export default Home
