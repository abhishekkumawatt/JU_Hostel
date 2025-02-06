import React from 'react'
import Header from '../components/common/Header/Header'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Pages/Home/Home';
import Footer from '../components/common/Footer/Footer';
import BookingRoomPayment from '../components/common/allpages/BookingRoomPayment';
import ContactUs from '../components/common/allpages/ContactUs';
import HostelBooking from '../components/common/allpages/HostelBooking';
import HostelBookingRoom from '../components/common/allpages/HostelBookingRoom';
import HostelBookingRoomDetails from '../components/common/allpages/HostelBookingRoomDetails';
import HostelFee from '../components/common/allpages/HostelFee';
import HostelRules from '../components/common/allpages/HostelRules';
import Login from '../components/common/allpages/Login';
import MyBooking from '../components/common/allpages/MyBooking';
import MyTransportBooking from '../components/common/allpages/MyTransportBooking';
import NewsDetails from '../components/common/allpages/NewsDetails';
import NewsList from '../components/common/allpages/NewsList';
import OTP from '../components/common/allpages/OTP';
import PrivacyPolicy from '../components/common/allpages/PrivacyPolicy';
import Register from '../components/common/allpages/Register';
import TermsConditions from '../components/common/allpages/TermsConditions';
import TransportBooking from '../components/common/allpages/TransportBooking';
import TransportBookingList from '../components/common/allpages/TransportBookingList';
import TransportPayment from '../components/common/allpages/TransportPayment';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/header" element={<Header />} />      
      <Route path="/" element={<Home />} />   
      <Route path='/footer' element={<Footer/>} />   
      <Route path='/booking-room-payment' element={<BookingRoomPayment/>} />
      <Route path='/contact-us' element={<ContactUs/>} />
      <Route path='/hostel-booking' element={<HostelBooking/>} />
      <Route path='/hostel-booking-room' element={<HostelBookingRoom/>} />
      <Route path='/hostel-booking-room-details' element={<HostelBookingRoomDetails/>} />
      <Route path='/hostel-fee' element={<HostelFee/>} />
      <Route path='/hostel-rules' element={<HostelRules/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/my-booking' element={<MyBooking/>} />
      <Route path='/my-transport-booking' element={<MyTransportBooking/>} />
      <Route path='/news-details' element={<NewsDetails/>} />
      <Route path='/news-list' element={<NewsList/>} />
      <Route path='/otp' element={<OTP/>} />
      <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/terms-conditions' element={<TermsConditions/>} />
      <Route path='/transport-booking' element={<TransportBooking/>} />
      <Route path='/transport-booking-list' element={<TransportBookingList/>} />
      <Route path='/transport-payment' element={<TransportPayment/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
