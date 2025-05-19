import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logout from "./logout";
import image from "../image/image.jpg";
import image2 from "../image/image2.webp";
import image3 from "../image/image3.jpg";
import image5 from "../image/image5.png";
import image6 from "../image/image6.png";
import image7 from "../image/image7.png";
import image9 from "../image/image9.png";
import image1 from "../image/image1.png";
import image4 from "../image/image4.png";
import image8 from "../image/image8.png";
import image10 from "../image/image10.png";
import image11 from "../image/image11.png";
import image12 from "../image/image12.png";
import image13 from "../image/image13.png";
import image14 from "../image/image14.png";
import image15 from "../image/image15.png";
import image16 from "../image/image16.jpg";
import image17 from "../image/image17.png";
import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("accessToken");
      setIsLoggedIn(!!token);
    };
    checkAuth();
  }, []);

  return (
    <div>
     <Header/>

      <iframe
        src="https://hcw.com.vn"
        style={{
          display: "block",
          width: "100vw",
          height: `calc(100vh)`,
          border: "none",
          margin: 0,
          padding: 0,
        }}
        allowFullScreen
        title="Home"
      />

    

     

     

    </div>
  );
};

export default Home;
