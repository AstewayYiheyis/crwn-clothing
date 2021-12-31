import React from 'react';
import {useNavigate} from "react-router-dom";
import './menu-item.styles.scss';

const MenuItem = ({ title, imgUrl, size }) => {
  const nav = useNavigate();

  return (<div className={`${size} menu-item`} onClick={() => nav(`/${title}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>);
}


export default MenuItem;