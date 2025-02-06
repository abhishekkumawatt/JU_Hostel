import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import paymentimg from '../../../assets/img/hostel/payment.png';

const TransportPayment = () => {
  return (
    <div>
		<Header/>
		<br/><br/><br/><br/>
      <div class="booking_section pb-115">
		<div class="gi-register-wrapper container">
			<div class="pl-115 pr-115">
			<h4 class="mb-3 fw-bold">Payment Now</h4>
			<div class="bg_basic_details position-relative p-3">
				<div class="bg_transparent p-3" >
					<div class="gi-login-box bg-transparent">
						<div class="multisteps-form__form">
							<div class="multisteps-form__paneldd">
								
								<div class="multisteps-form__content">
									<div class="row">
										<div class="col-md-6 text-center my-auto">
											<div class="transport">
												<h5 class="mb-3 fw-bold">Payment</h5>
												<h3 class="fw-bold">Rs. 450/-</h3>
												<button class="btn btn-danger px-5 mt-4 text-white"
															type="button">Payment Now</button>
											</div>
										</div>
										<div class="col-md-6">
											<div class="transport">
												<img src={paymentimg} alt="" />
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

export default TransportPayment
