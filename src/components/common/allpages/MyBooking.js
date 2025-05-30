import { useState } from 'react';
import author from '../../../assets/img/author.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';


const MyBooking = () => {
		const [isOpen, setIsOpen]=useState(false)
  return (
    <div>
		<br/><br/><br/><br/>
		 <header class="header-absolute sticky-header">
			<div class="container container-custom-two">
				<div class="nav-container d-flex align-items-center justify-content-between">
					{/* <!-- Main Menu -->
					<!-- Site Logo --> */}
					<div class="site-logo">
						<Link to="/" class="h3 fw-bold text-dark">Ju Hostel</Link>
					</div>
					<div class="nav-menu d-lg-flex align-items-center">
	
						{/* <!-- Navbar Close Icon --> */}
						{/* <!-- <div class="navbar-close">
							<div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
						</div> --> */}
	
						{/* <!-- Off canvas Menu  --> */}
						{/* <!-- <div class="toggle">
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
							
						</div>
						<nav class="navbar dropdown_menu menu-items">
						<div class={`dropdown category-list-dropdown ${isOpen && 'show'}`} onClick={()=>{setIsOpen(!isOpen)}}>
							<button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<img src={author} class="rounded-circle me-2" width="40" height="40" alt="" /> Ju Hostel
							</button>
							<ul class={`dropdown-menu profile_dropdown ${isOpen && 'show'}`}>
							  <li><Link class="dropdown-item" to="/my-booking">My Booking</Link></li>
							  <li><Link class="dropdown-item" to="/my-transport-booking">My Transport</Link></li>
							  <li><Link class="dropdown-item" to="/">Log Out</Link></li>
							</ul>
						  </div>
						</nav>
					</div>
	
					{/* <!-- Navbar Toggler --> */}
					<div class="navbar-toggler">
						<span></span><span></span><span></span>
					</div>
				</div>
			</div>
		</header>
      <div class="booking_section pb-115">
		<div class="gi-register-wrapper container">
			<h4 class="mb-3 fw-semibold">My Hostel Booking Room</h4>
			<div class="bg-white shadow rounded">
				<div class="p-4 py-3 border-bottom">
					<div class="row">
						<div class="col-md-12">
							<div class="bus_info">
								
								<h6 class="fw-semibold"><span class="fw-normal">Joining Date:</span>
									10 January 2024</h6>
							</div>
						</div>
						
						
					</div>
				</div>

				<div class="p-4">
					<div class="row">
						<div class="col-md-3 col-lg-3">
							<div class="bus_info">
								<h6 class="fw-normal text-secondary">Hostel Name</h6>
								<h6 class="fw-semibold py-2">Jaipur Jantar Hostel</h6>
								
							</div>
						</div>
						<div class="col-md-3 col-lg-3">
							<div class="bus_info">
								<h6 class="fw-normal text-secondary">Blog and Floor</h6>
								<h6 class="fw-semibold py-2">Blog A, Second Floor</h6>
								
							</div>
						</div>
						<div class="col-md-3 col-lg-3">
							<div class="bus_info">
								<h6 class="fw-normal text-secondary">Room No.</h6>
								<h6 class="fw-semibold py-2">103</h6>
								
							</div>
						</div>
						<div class="col-md-3 col-lg-3">
							<div class="bus_info">
								<h6 class="fw-normal text-secondary">Price</h6>
								<h6 class="fw-semibold text-danger py-2">5000/-</h6>
								
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer/>
    </div>
  )
}

export default MyBooking
