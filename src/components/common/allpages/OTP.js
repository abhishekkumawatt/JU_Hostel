import React, {useEffect} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import login from '../../../assets/img/hostel/login.png';
import { Link } from 'react-router-dom';


const OTP = () => {
	useEffect(() => {
				window.scrollTo(0, 0);
			  });
  return (
    <div>
		<Header/>
		<br/><br/><br/><br/>
      <div class="booking_section pb-115">
		<div class="container">
			<div class="bg_basic_details position-relative p-2">
				<div class="bg_transparent p-2">
					<div class="gi-login-box bg-transparent p-0">
						<div class="multisteps-form__form">
							<div class="multisteps-form__paneldd">
								<div class="row">
									<div class="col-md-6 col-lg-5">
										<img src={login} class="img-fluid" alt="" />
									</div>
									<div class="col-md-6 col-lg-6 my-auto">
										<div class="multisteps-form__contents p-5">
											<h2>Verification code</h2>
											<h6>We have sent the verification code on your 
												mobile number - <span class="text-danger">+91********78</span></h6>
											<form action="#" class="mt-5">
												<div class="formgrid">
													<div class="input-group input-group-two left-icon mb-20">
														<div class="d-flex justify-between gap-md-4 gap-lg-4">
															<input class="otp text-center" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength='1' />
															<input class="otp text-center" type="text" oninput='digitValidate(this)' onkeyup='tabChange(2)' maxlength='1' />
															<input class="otp text-center" type="text" oninput='digitValidate(this)' onkeyup='tabChange(3)' maxlength='1' />
															<input class="otp text-center" type="text" oninput='digitValidate(this)'onkeyup='tabChange(4)' maxlength='1' />
														  </div>
													</div>
													
													<div class="mb-20 text-center w-100">
														<p class="text-center text-secondary">Didn’t receive OTP  <Link hrer="#"
															class="fw-bold text-danger mt-0 mt-md-4">Resend code</Link></p>
													</div>
													<div class="input-group mt-4 input-group-two left-icon mb-20">

														<button class="btn btn-danger w-100 text-white"
															type="button">Verify</button>

													</div>
												</div>

											</form>
											
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

export default OTP
