import React from 'react';

import './SpecialMenu.css';
import {SubHeading , MenuItem} from "../../components"
import {images, data} from '../../constants'

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte"/>
      <h1 className='headtext__cormorant'>Todays Special</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_HotDrinking flex__center'>
        <p className='app__specialMenu_menu_heading'>HotDrinking</p>
        <div className='app__specialMenu-menu_item'>
          {data.HotDrinking.map((HotDrinking,index) => (
            <MenuItem key={HotDrinking.title + index} price={HotDrinking.price} title={HotDrinking.title} tags={HotDrinking.tags}/>
          ))}
        </div>
      </div>

    <div className="app__specialMenu-menu_img">
      <img src={images.menu} alt="menu img" />
    </div>

    <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu_menu_heading'>Coctails</p>
        <div className='app__specialMenu-menu_item'>
          {data.cocktails.map((cocktail,index) => (
            <MenuItem key={cocktail.title + index} price={cocktail.price} title={cocktail.title} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
  </div>

  <div style={{marginTop:"15px"}}>
    <button type='button'className='custom__button'>View More</button>
  </div>
  </div>
);

export default SpecialMenu;
