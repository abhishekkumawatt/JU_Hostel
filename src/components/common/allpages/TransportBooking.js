import React, {useEffect} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import booking from '../../../assets/img/hostel/booking.png';
import { Link } from 'react-router-dom';


const TransportBooking = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	  });
  return (
    <div>
        <Header/>
        <br/><br/><br/><br/>
      <div class="booking_section pb-115">
		<div class="gi-register-wrapper container">
			<div class="pl-115 pr-115">
			<h4 class="mb-3 fw-bold">Hostel Details</h4>
			<div class="bg_basic_details position-relative p-3">
				<div class="bg_transparent p-3">
					<div class="gi-login-box bg-transparent">
						<div class="multisteps-form__form">
							<div class="multisteps-form__paneldd">
								<h5 class="mb-3 fw-bold">Transport Booking</h5>
								<div class="multisteps-form__content">
									<form action="#">
										<div class="formgrid">
											<div class="row">
												<div class="col-md-3">
													<div class="input-group input-group-two left-icon mb-20">
														<label>From</label>
														<input type="text" placeholder="Jhotwara, Jaipur (Rajasthan)" class="form-control" />
													</div>
												</div>
												<div class="col text-center my-auto d-none d-md-block d-lg-block" style={{maxWidth: "50px"}}>
													<div class="input-group input-group-two left-icon justify-content-center">
														<i class="fas fa-exchange-alt"></i>
													</div>
												</div>
												<div class="col-md-3">
													<div class="input-group input-group-two left-icon mb-20">
														<label>To</label>
														<input type="text" placeholder="200 Ft Bypass, Jaipur (Rajasthan)" class="form-control" />
													</div>
												</div>
												<div class="col-md-3">
													<div class="input-group input-group-two left-icon mb-20">
														<label>Date</label>
														<input type="date" placeholder="Jhotwara, Jaipur (Rajasthan)" class="form-control" />
													</div>
												</div>
												<div class="col-md-2 align-items-end d-flex">
													<div class="input-group input-group-two left-icon mb-20">
														<Link to="/transport-booking-list" class="w-100">
														<button class="btn btn-danger js-btn-next text-white" type="button"
												>Submit</button>
												</Link>
													</div>
												</div>
												
											</div>
										</div>
										
									</form>
									<img src={booking} alt="" />
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

export default TransportBooking
