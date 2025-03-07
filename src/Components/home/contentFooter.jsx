import React from 'react'
// import SimpleSlider from './SimpleSlider'
// import Wedding from 'assets/CarousalCard/wedding.jpg'
// import Spring from 'assets/CarousalCard/spring-ceremony.jpg'
// import MoiParty from 'assets/CarousalCard/moi-party.jpg'
// import HouseWarm from '../../assets/CarousalCard/house-warm-2.jpg'
// import Home from '../../assets/CarousalCard/home-ceremony.jpg'
// import Engagement from '../../assets/CarousalCard/engagement.jpg'
// import Ear from '../../assets/CarousalCard/ear-piercing.jpg'
// import BirthDay from '../../assets/CarousalCard/birthday-1.jpg'
// import Bangles from '../../assets/CarousalCard/bangles-ceremony.jpg'
import Footer from '../footer/footer.jsx'

const contentFooter = () => {
  
  return (
   <>
         <section className="content">
         <div className="container">
            <div className="heading">
              <div className="icon">icon</div> <br />
              <h2>Events Overview</h2>
              <div className="stickline">
                __________
              </div>
            </div>
            
         </div>
         <div className="container py-5 mx-auto" style={{ textAlign:"center" }}>
              <div className="container d-inline"><img src="assets/CarousalCard/wedding.jpg" alt="" /></div>
              <div className="container d-inline"><img src="assets/CarousalCard/spring-ceremony.jpg" alt="" /></div>
              <div className="container d-inline"><img src="assets/CarousalCard/moi-party.jpg" alt="" /></div>
            </div>
         </section>
        {/* <SimpleSlider/> */}
        <Footer/>
        
   </>
  )
}

export default contentFooter