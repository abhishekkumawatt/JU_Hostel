import React, {useEffect} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import payment from '../../../assets/img/hostel/payment.png';

const BookingRoomPayment = () => {
	useEffect(() => {
			window.scrollTo(0, 0);
		  });
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
						<div class="card-body bg-white rounded" >
							<div class="row">
								<div class="col-md-6 my-auto text-center">
									<div class="rounded">
										<div
											class="card-body room_feature position-relative">
											<h5 class="fw-bold">Payment</h5>
											<h3 class="text-danger fw-bold">Rs. 50,000/-
											</h3>
											<button
												class="btn btn-danger mt-4 p-2 px-5 text-white"
												type="button" title="Submit">Pay Now</button>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="rounded card border-0">
										<div
											class="card-body room_feature position-relative">
											<img src={payment}
												alt="" />
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

export default BookingRoomPayment
