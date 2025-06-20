// import React from 'react'

// import "../Styles/home.css"
// const Home = () => {
//   return (
//     <div className='home-container'>
//       <div className='home-container1'></div>
//       <div className='home-container2'>
//         <div className='home-container4'></div>
//         <div className='home-container4'></div>
//         <div className='home-container4'></div>
//         <div className='home-container4'></div>
//         <div className='home-container4'></div>
//       </div>
//       <p>1/5</p>
//       <div className='home-container3'></div>
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../Styles/home.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Home = () => {
  const [mainBanner, setMainBanner] = useState(null);
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'banners', 'universalBanner');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setMainBanner({
            imageUrl: data.imageUrl,
            title: data.title
          });

          if (Array.isArray(data.images)) {
            setBanners(data.images);
          } else {
            console.log('images field is not an array');
          }
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching banner:', error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  return (
  
    <div className="home-container">
      <Nav></Nav>
      <div className='banner-box'>
        {mainBanner ? (
          <img
            src={mainBanner.imageUrl}
            alt={mainBanner.title}
            className="banner-image"
          />
        ) : (
          <p className="loading-text">Loading main banner...</p>
        )}
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="promo-banner-image"
              />
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button onClick={handlePrev}>&lt;</button>
          <span className='home-number'>{currentIndex + 1}/{banners.length}</span>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>

        <div className="home-menu">
        <div className="home-btn">
          <img src="/Frame-1.svg" alt="" className="home-logo" />
          <button className="home-btn">Boost Profile</button>
        </div>

        <div className="home-btn">
          <img src="/Frame.svg" alt="" className="home-logo" />
          <button className="home-btn">Add Banner</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
