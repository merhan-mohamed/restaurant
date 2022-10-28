import React from 'react';
import images from "../../constants/images"


import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    
   <div className='app__aboutus-overlay flex__center'>
    <img src={images.G} alt="G-letter" />
   </div>
   <div className='app__aboutus-content flex__center'>
    
    <div className="app__aboutus-content_about">
      <h1 className='headtext__cormorant'>About Us</h1>
      <img src={images.spoon} alt="spoone img" />
      <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor sed minus deserunt, quae quam nisi voluptates ea est impedit?</p>
      <button type='button' class="custom__button">Know More</button>
    </div>

    <div className="app__aboutus-content_knife flex__center">
      <img src={images.knife} alt="about knife" />
    </div>

    <div className="app__aboutus-content_history">
      <h1 className='headtext__cormorant'>Our History</h1>
      <img src={images.spoon} alt="spoone img" />
      <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor sed minus deserunt, quae quam nisi voluptates ea est impedit?</p>
      <button type='button' class="custom__button">Know More</button>
    </div>

   </div>
  </div>
);

export default AboutUs;
