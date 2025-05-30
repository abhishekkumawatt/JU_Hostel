import React, {useEffect, useState} from 'react'
import Footer from '../Footer/Footer'
import floor01 from '../../../assets/img/hostel/floor01.png';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import author from '../../../assets/img/author.png';

const HostelBooking = () => {
	const [isOpen, setIsOpen]=useState(false)
	useEffect(() => {
			window.scrollTo(0, 0);
		  });
  return (
    <div>
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
        <br/><br/><br/><br/>
      <div className="booking_section pb-115">
		<div className="gi-register-wrapper container">
			<h4 className="mb-3 fw-bold">Hostel Details</h4>
			<div className="bg_basic_details position-relative p-3">
				<div className="bg_transparent">
					<div className="gi-login-box bg-transparent">
						<div className="multisteps-form__contentss">
							<form action="#">
								<div className="formgrid">
									<div className="row">
										<div className="col-md-10 col-9">
											<div className="input-group input-group-two left-icon mb-20">
												<label>Select Hostel</label>
												<Form.Select aria-label="Default select example" style={{width:'60rem', height: '3.1rem'}}>
													<option value="" selected="">-- Select Hostel --
													</option>
													<option value="">Hostel 4</option>
													<option value="">Hostel 4</option>
													<option value="">Hostel 4</option>
												</Form.Select>
											</div>
										</div>
										<div className="col-md-2 col-3 align-items-end d-flex">
											<div className="input-group input-group-two left-icon mb-20">
												<button className="btn btn-danger js-btn-next p-2 px-2 text-white"
													type="button">Submit</button>
											</div>
										</div>


									</div>
								</div>

							</form>

							<div className="rounded card border-0 shadow-sm">
								<div className="card-body hover_floor">
									<div className="row">
										<div className="col-md-12">
											<div className="heading_title mb-3">
												<h5 className="fw-bold">Blog A</h5>
											</div>
										</div>
										<div className="col-md-6 col-lg-3">
											<div className="floorblog hover_floor">
												<Link to="/hostel-booking-room"><img src={floor01} className="img-fluid"
														alt="" />
													<span>Floor 1</span>
												</Link>
											</div>
										</div>
										<div className="col-md-6 col-lg-3">
											<div className="floorblog hover_floor">
												<Link to="/hostel-booking-room"><img src={floor01} className="img-fluid"
														alt="" />
													<span>Floor 2</span>
												</Link>
											</div>
										</div>
										<div className="col-md-6 col-lg-3">
											<div className="floorblog hover_floor">
												<Link to="/hostel-booking-room"><img src={floor01} className="img-fluid"
														alt="" />
													<span>Floor 3</span>
												</Link>
											</div>
										</div>
										<div className="col-md-6 col-lg-3">
											<div className="floorblog hover_floor">
												<Link to="/hostel-booking-room"><img src={floor01} className="img-fluid"
														alt="" />
													<span>Floor 4</span>
												</Link>
											</div>
										</div>
									</div>
									<div className="row mt-3 border-top pt-3">
										<div className="col-md-12">
											<div className="heading_title mb-3">
												<h5 className="fw-bold">Blog A</h5>
											</div>
										</div>
										<div className="col-md-6 col-lg-3">
											<div className="floorblog hover_floor">
												<Link to="/hostel-booking-room"><img src={floor01} className="img-fluid"
														alt="" />
													<span>Floor 1</span>
												</Link>
											</div>
										</div>
										<div className="col-md-6 col-lg-3">
											<div className="floorblog hover_floor">
												<Link to="/hostel-booking-room"><img src={floor01} className="img-fluid"
														alt="" />
													<span>Floor 2</span>
												</Link>
											</div>
										</div>
										<div className="col-md-6 col-lg-3">
											<div className="floorblog hover_floor">
												<Link to="/hostel-booking-room"><img src={floor01} className="img-fluid"
														alt="" />
													<span>Floor 3</span>
												</Link>
											</div>
										</div>
										<div className="col-md-6 col-lg-3">
											<div className="floorblog hover_floor">
												<Link to="/hostel-booking-room"><img src={floor01} className="img-fluid"
														alt="" />
													<span>Floor 4</span>
												</Link>
											</div>
										</div>
									</div>
								</div>
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

export default HostelBooking
