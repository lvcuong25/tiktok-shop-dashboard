import React from 'react';
import Header from './Header';
import Footer from './Footer';


const HuongDanKienThuc = () => {
  return (
    <div>
      <Header />
      <iframe
        src="https://hcw.com.vn/services/"
        style={{
          display: "block",
          width: "100vw",
          height: `calc(100vh)`,
          border: "none",
          margin: 0,
          padding: 0,
        }}
        allowFullScreen
        title="Huong Dan Kien Thuc"
      />
   
    </div>
  );
};

export default HuongDanKienThuc;
