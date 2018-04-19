import React from 'react';
import logoSiteIMG from './logoSite.jpg';
import './Logo.css';

export default function Logo(){
  return (
    <header>
      <img src={logoSiteIMG} alt="logo" id="logotype"/>
    </header>
  );
}
