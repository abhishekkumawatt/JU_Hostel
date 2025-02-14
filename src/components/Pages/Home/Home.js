import React, { useState, useEffect } from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import banner01img from "../../../assets/img/banner/01.png";
import banner02img from "../../../assets/img/banner/02.jpg";
import hostel06img from "../../../assets/img/hostel/06.jpg";
import hostel04img from "../../../assets/img/hostel/04.jpg";
import hostel01img from "../../../assets/img/hostel/01.png";
import hostel03img from "../../../assets/img/hostel/03.png";
import hostel02img from "../../../assets/img/hostel/02.png";
import dorm from "../../../assets/img/hostel/dorm.png";
import doublebed from "../../../assets/img/hostel/double-bed.png";
import alternative from "../../../assets/img/hostel/alternative.png";
import bus from "../../../assets/img/hostel/bus.png";
import route from "../../../assets/img/hostel/route.png";
import hostel04imgpng from "../../../assets/img/hostel/04.png";
import map from "../../../assets/img/hostel/map.png";
import accommodation from "../../../assets/img/hostel/accommodation.png";
import great from "../../../assets/img/hostel/great.png";
import gallery01img from "../../../assets/img/gallery/01.jpg";
import gallery02img from "../../../assets/img/gallery/02.jpg";
import gallery03img from "../../../assets/img/gallery/03.jpg";
import gallery04img from "../../../assets/img/gallery/04.jpg";
import gallery05img from "../../../assets/img/gallery/05.jpg";
import gallery06img from "../../../assets/img/gallery/06.jpg";
import gallery07img from "../../../assets/img/gallery/07.jpg";
import gallery08img from "../../../assets/img/gallery/08.jpg";
import latestpost01img from "../../../assets/img/latest-post/01.png";
import latestpost02img from "../../../assets/img/latest-post/02.png";
import latestpost03img from "../../../assets/img/latest-post/03.png";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Slider from "react-slick";
import AOS from "aos";

const Home = () => {
  const[showHostel, setShowHostel]=useState("hostel")

  const settings = {
    fade: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    // waitForAnimate: false,
  };
  // useEffect(() => {
  //       window.scrollTo(0, 0);
  //       });
  return (
    <div>
      <Header />
      <div>
        <section class="banner-area banner-style-one">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6">
                <div class="banner-content">
                  <h1 class="title wow fadeInLeft" data-aos="fade-right" data-aos-duration="500">
                    {" "}
                    Book your Hostel Anywhere, Anytime
                  </h1>

                  <span class="promo-tag wow fadeInDown" data-aos="fade-down" data-aos-duration="300">
                    With Just your smart phone, you can book any hostel in
                    navrongo and pay with momo{" "}
                  </span>
                  <ul>
                    <li>
                      <Link
                        class="main-btn btn-filled wow fadeInUp"
                        data-aos="fade-up"
                        data-aos-duration="700"
                        to="/hostel-booking"
                      >
                        Get Started
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-6 wow fadeInRight"
                data-aos-duration="500"
              >
                <div className="banner-thumb d-none d-md-block">
				<div class="hero-slider-one" data-aos="fade-left">
                  <Slider {...settings}>
                    <div className="single-thumb">
                      <img
                        src={banner01img}
                        height="500"
                        width="100%"
                        alt="images"
                      />
                    </div>
                    <div className="single-thumb">
                      <img
                        src={banner02img}
                        height="500"
                        width="100%"
                        alt="images"
                      />
                    </div>
                  </Slider>
				  </div>
                </div>
                {/* <div class="banner-thumb d-none d-md-block">
                  <div class="hero-slider-one">
                    <div class="single-thumb">
                      <img
                        src={banner01img}
                        height="500"
                        width="100%"
                        alt="images"
                      />
                    </div>
                    <div class="single-thumb">
                      <img
                        src={banner02img}
                        height="500"
                        width="100%"
                        alt="images"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== BANNER PART ENDS ======-->
	<!--====== 	HOSTEL TYPE START ======--> */}

        <section class="room-type-section bg-light pt-70 pb-70">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="section-title text-lg-left">
                  <span class="title-tag">Hostel List</span>
                  <h2>Hostel & Rooms</h2>
                </div>
              </div>
              <div class="col-lg-6">
                <ul
                  class="room-filter nav nav-pills justify-content-center justify-content-lg-end"
                  id="room-tab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <Link
                      class={`nav-link ${showHostel==="hostel" && 'active'}`}
                      id="relex-tab"
                      data-bs-toggle="pill"
                      to="#relex"
                      onClick={()=>setShowHostel("hostel")}
                    >
                      Hostels
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class={`nav-link ${showHostel==="room" && 'active'}`}
                      id="luxury-tab"
                      data-bs-toggle="pill"
                      to="#luxury"
                      onClick={()=>setShowHostel("room")}
                    >
                      Rooms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-content mt-65" id="room-tabContent">
              <div class={`tab-pane fade ${showHostel==="hostel" && "show active"}`} id="relex" role="tabpanel">
                <div class="room-items">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="room-box extra-height">
                        <div class="room-bg">
                          {/* <!-- <img src="assets/img/hostel/06.jpg" alt="" /> --> */}
                          <img
                            src={hostel06img}
                            class="reel"
                            id="image2d"
                            data-image="assets/img/hostel/06.jpg"
                            data-stitched="496"
                            data-frames="30"
                            data-frame="15"
                            data-spacing="5"
                            data-rows="3"
                            data-row="2"
                            data-loops="false"
                          />
                        </div>
                        <div class="room-content">
                          <h3>
                            <Link to="#">Rajnota Residency</Link>
                          </h3>
                          <span class="room-count">
                            <i class="flaticon-location-pin"></i> 41 Ganesh
                            Nagar 4 Murlipura, Jaipur
                          </span>
                        </div>
                        <Link to="#" class="room-link">
                          <i class="fal fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="room-box extra-height">
                        <div class="room-bg">
                          <img
                            src={hostel04img}
                            class="reel"
                            id="image2d"
                            data-image="assets/img/hostel/04.jpg"
                            data-stitched="400"
                            data-frames="100"
                            data-frame="1"
                            data-spacing="5"
                            data-rows="1"
                            data-row="1"
                            data-loops="false"
                          />
                        </div>
                        <div class="room-content">
                          <h3>
                            <Link to="#">Rajnota Residency</Link>
                          </h3>
                          <span class="room-count">
                            <i class="flaticon-location-pin"></i> 41 Ganesh
                            Nagar 4 Murlipura, Jaipur
                          </span>
                        </div>
                        <Link to="#" class="room-link">
                          <i class="fal fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="room-box extra-height">
                        <div class="room-bg">
                          <img src={hostel01img} alt="" />
                        </div>
                        <div class="room-content">
                          <h3>
                            <Link to="#">Rajnota Residency</Link>
                          </h3>
                          <span class="room-count">
                            <i class="flaticon-location-pin"></i> 41 Ganesh
                            Nagar 4 Murlipura, Jaipur
                          </span>
                        </div>
                        <Link to="#" class="room-link">
                          <i class="fal fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`tab-pane fade ${showHostel==="room" && "show active"}`} id="luxury" role="tabpanel">
                <div class="room-items">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="room-box extra-height">
                        <div class="room-bg">
                          <img src={hostel01img} alt="" />
                        </div>
                        <div class="room-content">
                          <h3>
                            <Link to="#">Rajnota Residency</Link>
                          </h3>
                          <span class="room-count">
                            <i class="flaticon-location-pin"></i> 41 Ganesh
                            Nagar 4 Murlipura, Jaipur
                          </span>
                        </div>
                        <Link to="#" class="room-link">
                          <i class="fal fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="room-box extra-height">
                        <div class="room-bg">
                          <img src={hostel01img} alt="" />
                        </div>
                        <div class="room-content">
                          <h3>
                            <Link to="#">Rajnota Residency</Link>
                          </h3>
                          <span class="room-count">
                            <i class="flaticon-location-pin"></i> 41 Ganesh
                            Nagar 4 Murlipura, Jaipur
                          </span>
                        </div>
                        <Link to="#" class="room-link">
                          <i class="fal fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="room-box extra-height">
                        <div class="room-bg">
                          <img src={hostel01img} alt="" />
                        </div>
                        <div class="room-content">
                          <h3>
                            <Link to="#">Rajnota Residency</Link>
                          </h3>
                          <span class="room-count">
                            <i class="flaticon-location-pin"></i> 41 Ganesh
                            Nagar 4 Murlipura, Jaipur
                          </span>
                        </div>
                        <Link to="#" class="room-link">
                          <i class="fal fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== HOSTEL TYPE END ======-->

	<!-- Hostel rooms --> */}
        <section class="text-block with-bg pt-70 pb-70">
          <div class="container">
            <div class="row align-items-center justify-content-center justify-content-lg-between">
              <div
                class="col-lg-4 col-md-6 wow fadeInRight"
                data-wow-delay=".5s"
                data-aos="fade-left"
              >
                <div class="video-wrap">
                  <img src={hostel02img} alt="" />
                </div>
              </div>
              <div
                class="col-lg-8 col-md-6 wow fadeInLeft"
                data-aos-duration="1500"
                data-aos="fade-right"
              >
                <div class="block-text mb-small pl-20">
                  <div class="section-title mb-20">
                    <span class="title-tag">Hostel Rooms</span>
                    <h2>Types of Hostel Rooms</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div class="row mt-4">
                    <div class="col-md-6">
                      <div class="d-flex gap-1 align-items-center dorm_room">
                        <img src={dorm} alt="" />
                        <div>
                          <h4>Dorm</h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="d-flex gap-1 align-items-center dorm_room">
                        <img src={doublebed} alt="" />
                        <div>
                          <h4>Double bed dorm rooms </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="d-flex gap-1 align-items-center dorm_room">
                        <img src={alternative} alt="" />
                        <div>
                          <h4>Alternative dorms</h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to="/hostel-booking" class="main-btn btn-filled mt-40">
                    Room Booking
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- hostel rooms -->
	<!-- Transport Booking --> */}
        <section class="text-block with-bg pt-70 pb-70">
          <div class="container">
            <div class="row align-items-center justify-content-center justify-content-lg-between">
              <div
                class="col-lg-7 col-md-6 wow fadeInLeft"
                data-wow-delay=".3s"
                data-aos="fade-left"
              >
                <div class="block-text mb-small pr-20">
                  <div class="section-title mb-20">
                    <span class="title-tag">Transport</span>
                    <h2>Transport Booking</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div class="row mt-4">
                    <div class="col-md-6">
                      <div class="d-flex gap-1 align-items-center dorm_room">
                        <img src={route} alt="" />
                        <div>
                          <h4>Route and timing</h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="d-flex gap-1 align-items-center dorm_room">
                        <img src={bus} alt="" />
                        <div>
                          <h4>Bus Availability Status</h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/transport-booking"
                    class="main-btn btn-filled mt-40"
                  >
                    Transport Booking
                  </Link>
                </div>
              </div>
              <div
                class="col-lg-5 col-md-6 wow fadeInRight"
                data-wow-delay=".5s"
                data-aos="fade-right"
              >
                <div class="video-wrap">
                  <img src={hostel03img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Transport Booking -->
	<!-- Services --> */}
        <section class="text-block with-bg pt-70 pb-70">
          <div class="container">
            <div class="row align-items-center justify-content-center justify-content-lg-between">
              <div
                class="col-lg-5 col-md-6 wow fadeInRight"
                data-wow-delay=".5s"
                data-aos="fade-right"
              >
                <div class="video-wrap">
                  <img src={hostel04imgpng} alt="" />
                </div>
              </div>
              <div
                class="col-lg-7 col-md-6 wow fadeInLeft"
                data-wow-delay=".3s"
                data-aos="fade-left"
              >
                <div class="block-text mb-small pl-20">
                  <div class="section-title mb-20">
                    <span class="title-tag">Services</span>
                    <h2>We Can Assist you with a variety of Services</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div class="row mt-4">
                    <div class="col-md-6">
                      <div class="d-flex gap-1 align-items-center dorm_room">
                        <img src={map} alt="" />
                        <div>
                          <h4>Map & Directions</h4>
                          <p>
                            Our hostel is located in the downtown and not too
                            far from airport and bus station so it is quite easy
                            to find us wherever you come from.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="d-flex gap-1 align-items-center dorm_room">
                        <img src={accommodation} alt="" />
                        <div>
                          <h4>Accommodation services</h4>
                          <p>
                            Visit Hostel provides high-quality accommodation
                            services to clients that come to our city from all
                            over the world throughout the year.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="d-flex gap-1 align-items-center dorm_room">
                        <img src={great} alt="" />
                        <div>
                          <h4>Great experience</h4>
                          <p>
                            With qualified and friendly staff and high level of
                            comfort, we are sure you will have a great
                            experience of staying at the Visit Hostel.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Services -->
	<!-- gallery section --> */}
        <div class="banner-area bg-light pt-70 pb-70">
          <div class="container">
            <div class="row align-items-center justify-content-center justify-content-lg-between">
              <div
                class="col-lg-12 col-md-12 text-center wow fadeInLeft"
                data-wow-delay=".3s"
                data-aos="fade-left"
              >
                <div class="block-text mb-small pl-20">
                  <div class="section-title mb-20">
                    <span class="title-tag">Our Gallery</span>
                    <h2>Explore Now</h2>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-12 col-md-12 text-center wow fadeInLeft"
                data-wow-delay=".3s"
                data-aos="fade-left"
              >
                <div class="gallery-loop">
                  <div
                    class="single-gallery-image wow fadeInUp"
                    data-wow-delay=".3s"
                    data-aos="fade-up"
                  >
                    <PhotoProvider>
                      <PhotoView src={gallery01img}>
                        <img src={gallery01img} alt="" />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  <div
                    class="single-gallery-image wow fadeInUp"
                    data-wow-delay=".4s"
                    data-aos="fade-up"
                  >
                    <PhotoProvider>
                      <PhotoView src={gallery02img}>
                        <img src={gallery02img} alt="" />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  <div
                    class="single-gallery-image wow fadeInUp"
                    data-wow-delay=".5s"
                    data-aos="fade-up"
                  >
                    <PhotoProvider>
                      <PhotoView src={gallery03img}>
                        <img src={gallery03img} alt="" />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  <div
                    class="single-gallery-image wow fadeInUp"
                    data-wow-delay=".6s"
                    data-aos="fade-up"
                  >
                    <PhotoProvider>
                      <PhotoView src={gallery04img}>
                        <img src={gallery04img} alt="" />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  <div
                    class="single-gallery-image wow fadeInUp"
                    data-wow-delay=".7s"
                    data-aos="fade-up"
                  >
                    <PhotoProvider>
                      <PhotoView src={gallery05img}>
                        <img src={gallery05img} alt="" />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  <div
                    class="single-gallery-image wow fadeInUp"
                    data-wow-delay=".8s"
                    data-aos="fade-up"
                  >
                    <PhotoProvider>
                      <PhotoView src={gallery06img}>
                        <img src={gallery06img} alt="" />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  <div
                    class="single-gallery-image wow fadeInUp"
                    data-wow-delay=".9s"
                    data-aos="fade-up"
                  >
                    <PhotoProvider>
                      <PhotoView src={gallery07img}>
                        <img src={gallery07img} alt="" />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  <div
                    class="single-gallery-image wow fadeInUp"
                    data-wow-delay="1.1s"
                    data-aos="fade-up"
                  >
                    <PhotoProvider>
                      <PhotoView src={gallery08img}>
                        <img src={gallery08img} alt="" />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- gallery section end --> */}
        <div class="clear-fix"></div>
        {/* <!--====== LATEST NEWS START ======--> */}
        <section class="latest-news bg-white pt-70 pb-70">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12 text-center">
                <div class="section-title">
                  <span class="title-tag">News</span>
                  <h2>Our Latest News</h2>
                </div>
              </div>
            </div>
            {/* <!-- Latest post loop --> */}
            <div class="row mt-40">
              <div class="col-lg-4">
                <div class="latest-post-box">
                  <div class="post-img">
                    <img src={latestpost01img} alt="" />
                  </div>
                  <div class="post-desc">
                    <ul class="post-meta">
                      <li>
                        <Link to="#">
                          <i class="fal fa-calendar-alt"></i>18 Dec. 2024 11:56
                          am
                        </Link>
                      </li>
                    </ul>
                    <h4>
                      <Link to="/news-details">
                        6 Summer Programes for Indian students in international
                        colleges
                      </Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="latest-post-box">
                  <div class="post-img">
                    <img src={latestpost02img} alt="" />
                  </div>
                  <div class="post-desc">
                    <ul class="post-meta">
                      <li>
                        <Link to="#">
                          <i class="fal fa-calendar-alt"></i>23rd March 2019
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i class="fal fa-user"></i>By Admin
                        </Link>
                      </li>
                    </ul>
                    <h4>
                      <Link to="/news-details">
                        Each of our 8 double rooms has its own distinct.
                      </Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="latest-post-box">
                  <div class="post-img">
                    <img src={latestpost03img} alt="" />
                  </div>
                  <div class="post-desc">
                    <ul class="post-meta">
                      <li>
                        <Link to="#">
                          <i class="fal fa-calendar-alt"></i>23rd March 2019
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i class="fal fa-user"></i>By Admin
                        </Link>
                      </li>
                    </ul>
                    <h4>
                      <Link to="/news-details">
                        Each of our 8 double rooms has its own distinct.
                      </Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== LATEST NEWS END ======--> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
