import React from 'react';
import Header from './Header';
import Footer from './Footer';


const KhoiNghiepKinhDoanh = () => {
  return (
    <div>
      <iframe
        src="https://khoinghiepkinhdoanh.info/"
        style={{
          display: "block",
          width: "100vw",
          height: `calc(100vh)`,
          border: "none",
          margin: 0,
          padding: 0,
        }}
        allowFullScreen
        title="Khoi Nghiep Kinh Doanh"
      />
    </div>
  );
};

export default KhoiNghiepKinhDoanh;
