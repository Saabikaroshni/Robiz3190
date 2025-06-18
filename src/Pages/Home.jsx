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
import '../Styles/home.css'; // external CSS file

const Home = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const docRef = doc(db, 'banners', 'universalBanner');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBanner(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching banner:', error);
      }
    };

    fetchBanner();
  }, []);

  return (
    <div className="home-container">
      {banner ? (
        
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="banner-image"
          />
          
        
      ) : (
        <p className="loading-text">Loading banner...</p>
      )}

      <div className="banner-box">
         {/* add imges here */}
      </div>

      <div className='home-menu'>
          <div className='home-btn' >
            <img src="/boost.png" alt="" className='home-logo'/>
            <button className='home-btn'>Boost Profile</button>
          </div>
        
          <div className='home-btn'>
            <img src="/banner.png" alt="" className='home-logo'/>
            <button className='home-btn' >Add Banner</button>
          </div>
      </div>
    </div>
  );
};

export default Home;

