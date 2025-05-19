import React from 'react';
import Header from './Header';
import Footer from './Footer';


const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <iframe
        src="https://www.hcwvietnam.com/xn--chnh-sch-quyn-ring-t-ca-google-ads-g1c84aidsx93uz104a"
        style={{
          display: "block",
          width: "100vw",
          height: `calc(100vh - 100px)`,
          border: "none",
          margin: 0,
          padding: 0,
          marginTop: "100px",
        }}
        allowFullScreen
        title="Chính sách bảo mật"
      />
    </div>
  );
};

export default PrivacyPolicy;
