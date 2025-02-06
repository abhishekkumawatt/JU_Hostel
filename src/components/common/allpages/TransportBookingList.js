import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const TransportBookingList = () => {
  return (
    <div>
		<Header/>
		<br/><br/><br/><br/>
      <div class="booking_section pb-115">
		<div class="gi-register-wrapper container">
			<div class="pl-115 pr-115">
				<h4 class="mb-3 fw-semibold">Transport Booking</h4>
				<div class="bg_basic_details position-relative p-3">
					<div class="bg_transparent p-3" >
						<div class="gi-login-box bg-transparent">
							<div class="multisteps-form__form">
								<div class="multisteps-form__paneldd">
									<h5 class="mb-3 fw-semibold">Transport Booking</h5>
									<div class="multisteps-form__content">
										<form action="#">
											<div class="formgrid">
												<div class="row">
													<div class="col-md-3">
														<div class="input-group input-group-two left-icon mb-20">
															<label>From</label>
															<input type="text"
																placeholder="Jhotwara, Jaipur (Rajasthan)"
																class="form-control" />
														</div>
													</div>
													<div class="col text-center my-auto d-none d-md-block d-lg-block"
														style={{maxWidth: "50px" }}>
														<div
															class="input-group input-group-two left-icon justify-content-center">
															<i class="fas fa-exchange-alt"></i>
														</div>
													</div>
													<div class="col-md-3">
														<div class="input-group input-group-two left-icon mb-20">
															<label>To</label>
															<input type="text"
																placeholder="200 Ft Bypass, Jaipur (Rajasthan)"
																class="form-control" />
														</div>
													</div>
													<div class="col-md-3">
														<div class="input-group input-group-two left-icon mb-20">
															<label>Date</label>
															<input type="date"
																placeholder="Jhotwara, Jaipur (Rajasthan)"
																class="form-control" />
														</div>
													</div>
													<div class="col-md-2 align-items-end d-flex">
														<div class="input-group input-group-two left-icon mb-20">
															<a href="/transport-booking-list" class="w-100">
																<button class="btn btn-danger js-btn-next text-white"
																	type="button">Submit</button>
															</a>
														</div>
													</div>

												</div>
											</div>

										</form>
									</div>
									<h5 class="mb-3 fw-semibold">4 Buses Available</h5>
									<div class="bg-white shadow rounded mt-3">
										<div class="p-4 py-3 border-bottom">
											<div class="row">
												<div class="col-md-4">
													<div class="bus_info">
														<h6 class="fw-semibold"><i class="fas fa-bus"></i> Vikas Travels
															Jaipur</h6>
													</div>
												</div>
												<div class="col-md-4 text-center">
													<div class="bus_info">
														<h6 class="fw-semibold"><span class="fw-normal">Driver Name:</span>
															John Wick</h6>
													</div>
												</div>
												<div class="col-md-4 text-md-end">
													<div class="bus_info">
														<h5 class="fw-semibold text-danger">Rs.450</h5>
													</div>
												</div>
											</div>
										</div>

										<div class="p-4">
											<div class="row">
												<div class="col-md-4">
													<div class="bus_info">
														<h6 class="fw-normal text-secondary">Departure</h6>
														<h6 class="fw-semibold py-2">Jhotwara, Jaipur (Rajasthan)</h6>
														<div class="fw-semibold small text-danger">08:15 AM</div>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 my-auto">
													<div class="bus_info">
														<div class="bg-light small py-2 px-3 text-center rounded-pill">8
															Hours 30 minutes</div>
													</div>
												</div>
												<div class="col-md-4 col-lg-4 border-end border-2">
													<div class="bus_info">
														<h6 class="fw-normal text-secondary">Arrival</h6>
														<h6 class="fw-semibold py-2">200 Ft Bypass, Jaipur (Rajasthan)</h6>
														<div class="fw-semibold small text-danger">04:15 PM</div>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 my-auto">
													<div class="bus_info ps-0 ps-md-4 ps-lg-4">
														<a href="/transport-payment"><button class="btn btn-danger w-100 js-btn-next text-white"
															type="button">Book Now</button></a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="bg-white shadow rounded mt-3">
										<div class="p-4 py-3 border-bottom">
											<div class="row">
												<div class="col-md-4">
													<div class="bus_info">
														<h6 class="fw-semibold"><i class="fas fa-bus"></i> Vikas Travels
															Jaipur</h6>
													</div>
												</div>
												<div class="col-md-4 text-center">
													<div class="bus_info">
														<h6 class="fw-semibold"><span class="fw-normal">Driver Name:</span>
															John Wick</h6>
													</div>
												</div>
												<div class="col-md-4 text-md-end">
													<div class="bus_info">
														<h5 class="fw-semibold text-danger">Rs.450</h5>
													</div>
												</div>
											</div>
										</div>

										<div class="p-4">
											<div class="row">
												<div class="col-md-4">
													<div class="bus_info">
														<h6 class="fw-normal text-secondary">Departure</h6>
														<h6 class="fw-semibold py-2">Jhotwara, Jaipur (Rajasthan)</h6>
														<div class="fw-semibold small text-danger">08:15 AM</div>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 my-auto">
													<div class="bus_info">
														<div class="bg-light small py-2 px-3 text-center rounded-pill">8
															Hours 30 minutes</div>
													</div>
												</div>
												<div class="col-md-4 col-lg-4 border-end border-2">
													<div class="bus_info">
														<h6 class="fw-normal text-secondary">Arrival</h6>
														<h6 class="fw-semibold py-2">200 Ft Bypass, Jaipur (Rajasthan)</h6>
														<div class="fw-semibold small text-danger">04:15 PM</div>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 my-auto">
													<div class="bus_info ps-0 ps-md-4 ps-lg-4">
														<a href="/transport-payment"><button class="btn btn-danger w-100 js-btn-next text-white"
															type="button">Book Now</button></a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="bg-white shadow rounded mt-3">
										<div class="p-4 py-3 border-bottom">
											<div class="row">
												<div class="col-md-4">
													<div class="bus_info">
														<h6 class="fw-semibold"><i class="fas fa-bus"></i> Vikas Travels
															Jaipur</h6>
													</div>
												</div>
												<div class="col-md-4 text-center">
													<div class="bus_info">
														<h6 class="fw-semibold"><span class="fw-normal">Driver Name:</span>
															John Wick</h6>
													</div>
												</div>
												<div class="col-md-4 text-md-end">
													<div class="bus_info">
														<h5 class="fw-semibold text-danger">Rs.450</h5>
													</div>
												</div>
											</div>
										</div>

										<div class="p-4">
											<div class="row">
												<div class="col-md-4">
													<div class="bus_info">
														<h6 class="fw-normal text-secondary">Departure</h6>
														<h6 class="fw-semibold py-2">Jhotwara, Jaipur (Rajasthan)</h6>
														<div class="fw-semibold small text-danger">08:15 AM</div>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 my-auto">
													<div class="bus_info">
														<div class="bg-light small py-2 px-3 text-center rounded-pill">8
															Hours 30 minutes</div>
													</div>
												</div>
												<div class="col-md-4 col-lg-4 border-end border-2">
													<div class="bus_info">
														<h6 class="fw-normal text-secondary">Arrival</h6>
														<h6 class="fw-semibold py-2">200 Ft Bypass, Jaipur (Rajasthan)</h6>
														<div class="fw-semibold small text-danger">04:15 PM</div>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 my-auto">
													<div class="bus_info ps-0 ps-md-4 ps-lg-4">
														<a href="/transport-payment"><button class="btn btn-danger w-100 js-btn-next text-white"
															type="button">Book Now</button></a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="bg-white shadow rounded mt-3">
										<div class="p-4 py-3 border-bottom">
											<div class="row">
												<div class="col-md-4">
													<div class="bus_info">
														<h6 class="fw-semibold"><i class="fas fa-bus"></i> Vikas Travels
															Jaipur</h6>
													</div>
												</div>
												<div class="col-md-4 text-center">
													<div class="bus_info">
														<h6 class="fw-semibold"><span class="fw-normal">Driver Name:</span>
															John Wick</h6>
													</div>
												</div>
												<div class="col-md-4 text-md-end">
													<div class="bus_info">
														<h5 class="fw-semibold text-danger">Rs.450</h5>
													</div>
												</div>
											</div>
										</div>

										<div class="p-4">
											<div class="row">
												<div class="col-md-4">
													<div class="bus_info">
														<h6 class="fw-normal text-secondary">Departure</h6>
														<h6 class="fw-semibold py-2">Jhotwara, Jaipur (Rajasthan)</h6>
														<div class="fw-semibold small text-danger">08:15 AM</div>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 my-auto">
													<div class="bus_info">
														<div class="bg-light small py-2 px-3 text-center rounded-pill">8
															Hours 30 minutes</div>
													</div>
												</div>
												<div class="col-md-4 col-lg-4 border-end border-2">
													<div class="bus_info">
														<h6 class="fw-normal text-secondary">Arrival</h6>
														<h6 class="fw-semibold py-2">200 Ft Bypass, Jaipur (Rajasthan)</h6>
														<div class="fw-semibold small text-danger">04:15 PM</div>
													</div>
												</div>
												<div class="col-md-2 col-lg-2 my-auto">
													<div class="bus_info ps-0 ps-md-4 ps-lg-4">
														<button class="btn btn-danger w-100 js-btn-next text-white"
															type="button">Book Now</button>
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
		</div>
	</div>
	<Footer/>
    </div>
  )
}

export default TransportBookingList
