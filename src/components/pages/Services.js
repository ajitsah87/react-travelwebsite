import React from 'react';
import CardItem from '../CardItem';
import Footer from '../Footer';

import '../../App.css';

import './Services.css';
import MyApi from '../../Hook/MyApi';

export default function Services() {
  return (
    <>
      <h1 className='services'>SERVICES</h1>
      <section className='heading max-lg:p-2'>
        <h2 className='text-3xl text-center '>Activities we think you would enjoy</h2>
     <MyApi/>
      </section>

  
      <Footer />
    </>
  
  
  );
}