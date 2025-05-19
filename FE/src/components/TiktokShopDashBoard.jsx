import React from 'react';
import Header from './Header';
import Footer from './Footer';


const TiktokShopDashBoard = () => {
  return (
    <div>
      <Header />
      <iframe
        src="https://www.hcwvietnam.com/tiktokshop-api"
        style={{
          display: "block",
          width: "100vw",
          height: `calc(100vh)`,
          border: "none",
          margin: 0,
          padding: 0,
        }}
        allowFullScreen
        title="TikTok Shop Dashboard"
      />
    </div>
  );
};

export default TiktokShopDashBoard;
