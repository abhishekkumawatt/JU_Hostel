import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header class="header-absolute sticky-header" style={{position:'fixed', zIndex:'1000', backgroundColor:'white'}}>
		<div class="container container-custom-two">
			<div class="nav-container d-flex align-items-center justify-content-between">
				{/* <!-- Main Menu -->
				<!-- Site Logo --> */}
				<div class="site-logo">
					<Link to="/" class="h3 fw-bold text-dark">Ju Hostel</Link>
				</div>
				<div class="nav-menu d-lg-flex align-items-center">

					{/* <!-- Navbar Close Icon -->
					<!-- <div class="navbar-close">
						<div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
					</div> -->

					<!-- Off canvas Menu  -->
					<!-- <div class="toggle">
						<Link to="#" id="offCanvasBtn"><i class="fal fa-bars"></i></Link>
					</div> --> */}
					{/* <!-- Mneu Items --> */}
					<div class="menu-items">
						<ul>
							<li>
								<Link to="/hostel-booking">Room Booking</Link>
							</li>
							<li>
								<Link to="/transport-booking">Transport Booking</Link>
							</li>
							<li>
								<Link to="/hostel-fee">Fee Structure</Link>
							</li>
							<li><Link to="/news-list">News</Link></li>
							<li><Link to="/contact-us">Contact Us</Link></li>
						</ul>
					</div>

					{/* <!-- from pushed-item --> */}
					<div class="nav-pushed-item"></div>
				</div>
                
				{/* <!-- Header Info Pussed To Menu Wrap --> */}
				<div class="nav-push-item">
					{/* <!-- Header Info --> */}
					<div class="header-info gap-3 d-lg-flex align-items-center">
						<Link to="/login">Login</Link>
						<Link to="/register" class="btn btn-danger">Registration</Link>

					</div>
				</div>

				{/* <!-- Navbar Toggler --> */}
				<div class="navbar-toggler">
					<span></span><span></span><span></span>
				</div>
			</div>
		</div>
	</header>
    </div>
  )
}

export default Header
