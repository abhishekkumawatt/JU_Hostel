import React, {useEffect} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import floor01 from '../../../assets/img/hostel/floor01.png';
import { Link } from 'react-router-dom';

const HostelBooking = () => {
	useEffect(() => {
			window.scrollTo(0, 0);
		  });
  return (
    <div>
        <Header/>
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
												<select name="guest" id="guest"style={{ display: "none" }}>
													<option value="" selected="">-- Select Hostel --
													</option>
													<option value="">Hostel 4</option>
													<option value="">Hostel 4</option>
													<option value="">Hostel 4</option>
												</select>
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
