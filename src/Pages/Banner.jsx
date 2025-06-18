// import React, { useEffect, useState } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../firebase';
// import '../Styles/home.css';

// const Home = () => {
//   const [banners, setBanners] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchBanners = async () => {
//       try {
//         const docRef = doc(db, 'banners', 'universalBanner');
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const data = docSnap.data();
//           if (Array.isArray(data.images)) {
//             setBanners(data.images);
//           } else {
//             console.log('images field is not an array');
//           }
//         } else {
//           console.log('No such document!');
//         }
//       } catch (error) {
//         console.error('Error fetching banner:', error);
//       }
//     };

//     fetchBanners();
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? banners.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="home-container">
//       {banners.length > 0 ? (
//         <div className="carousel">
//           <img
//             src={banners[currentIndex].imageUrl}
//             alt={banners[currentIndex].title}
//             className="banner-image"
//           />
//           <div className="carousel-controls">
//             <button onClick={handlePrev}>&lt;</button>
//             <span>{currentIndex + 1}/{banners.length}</span>
//             <button onClick={handleNext}>&gt;</button>
//           </div>
//         </div>
//       ) : (
//         <p className="loading-text">Loading banners...</p>
//       )}

//       <div className="banner-box">
//         {/* You can render thumbnails or grid if needed */}
//       </div>

      // <div className="home-menu">
      //   <div className="home-btn">
      //     <img src="/boost.png" alt="" className="home-logo" />
      //     <button className="home-btn">Boost Profile</button>
      //   </div>

      //   <div className="home-btn">
      //     <img src="/banner.png" alt="" className="home-logo" />
      //     <button className="home-btn">Add Banner</button>
      //   </div>
      // </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../Styles/home.css'; 

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
