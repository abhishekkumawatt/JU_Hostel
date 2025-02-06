import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import hostelfloor01 from '../../../assets/img/hostel/floor01.png';

const HostelBookingRoomDetails = () => {
  return (
    <div>
        <Header/>
        <br/><br/><br/><br/>
      <div class="booking_section">
		<div class="gi-register-wrapper container">
			<h4 class="mb-3 fw-bold">Hostel Details</h4>
			<div class="bg_basic_details position-relative p-3">
				<div class="bg_transparent">
					<div class="gi-login-box bg-transparent">
						<div class="rounded card border-0 shadow-sm">
							<div class="card-body hover_floor">
								<div class="row">
									<div class="col-md-6 col-lg-8">
										<div class="rounded card border-0 border-end">
											<div class="card-body room_feature position-relative">
												<h4 class="fw-bold">Room Features</h4>
												<ul class="mt-3">
													<li><b>Wi-Fi:</b> Complimentary High-Speed
														Wi-Fi</li>
													<li><b>Climate Control:</b> Individual Air
														Conditioning
														and Heating</li>
													<li><b>Entertainment:</b> 50-inch
														Flat-Screen TV with
														Cable and Satellite</li>
													<li><b>Workspace:</b> Ergonomic Work Desk
														and Chair
													</li>
													<li><b>Safety:</b> In-Room Safe</li>
													<li> <b>Communication:</b> Direct-Dial
														Telephone with
														Voicemail</li>
													<li> <b>Convenience:</b> Alarm Clock, Iron,
														and Ironing
														Board</li>
												</ul>
												<div class="mt-4">
													<div class="d-flex gap-3 align-items-center">
													<div class="col">
														<div class="input-group input-group-two left-icon mb-20">
															<label>User Roles</label>
															<select name="guest" id="guest" style={{display:'none'}}>
																<dropdown value="" selected="">-- Select --
																
																<option value="">1 Month</option>
																<option value="">6 Month</option>
																<option value="">12 Month</option>
																</dropdown>
																
															</select>
														</div>
													</div>
													<div class="col">
														<h6 class="fw-bold">Price Room</h6>
														<h4 class="text-danger fw-bold">Rs.50,000 </h4>
													</div>
													</div>
													<a href="/booking-room-payment"
														class="btn btn-danger js-btn-next p-2 px-4 mt-2 text-white"
														type="button">Book Now</a>
												</div>
											</div>
										</div>
									</div>

									<div class="col-md-6 col-lg-4 my-auto">
										<div class="rounded card border-0">
											<div class="card-body room_feature position-relative">
												<img src={hostelfloor01} class="img-fluid rounded w-100"
													data-bs-toggle="modal" data-bs-target="#exampleModal" alt="" />


												<button class="btn btn-danger js-btn-next p-2 px-4 mt-3 text-white"
													type="button" data-bs-toggle="modal"
													data-bs-target="#exampleModal">View Room</button>
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

export default HostelBookingRoomDetails
