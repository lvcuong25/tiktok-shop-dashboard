import React from 'react'
import {  Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import SignUp from '../components/signup.jsx';
import SignIn from '../components/signin.jsx';
import TiktokShopDashBoard from '../components/TiktokShopDashBoard.jsx';
import KhoiNghiepKinhDoanh from '../components/KhoiNghiepKinhDoanh.jsx';
import HuongDanKienThuc from '../components/HuongDanKienThuc.jsx';
const Router = () => {
  return (
    <div>
      <Routes>
       <Route>
       <Route index element={<Home/>}/>
       <Route path='/login' element={<SignIn/>}/>
       <Route path='/logup' element={<SignUp/>}/>
       <Route path='/tiktok-shop-dashboard' element={<TiktokShopDashBoard/>}/>
       <Route path='/khoi-nghiep-kinh-doanh' element={<KhoiNghiepKinhDoanh/>}/>
       <Route path='/huong-dan-kien-thuc' element={<HuongDanKienThuc/>}/>
       </Route>

       
        
       
      </Routes>
    </div>
  )
}

export default Router
