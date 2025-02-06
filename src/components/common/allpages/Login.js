import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import login from '../../../assets/img/hostel/login.png';

const Login = () => {
  return (
    <div>
        <Header/>
        <br/><br/><br/><br/>
      <div class="booking_section pb-115">
		<div class="gi-register-wrapper container">
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
											<h2>Login</h2>
											<h6>Welcome back! Please login to your account.</h6>
											<form action="#" class="mt-5">
												<div class="formgrid">
													<div class="input-group input-group-two left-icon mb-20">
														<label>User Roles</label>
														<select name="guest" id="guest" style={{display:'none'}}>
															<option value="" selected="">-- Select --
															</option>
															<option value="">Admin</option>
															<option value="">Warden</option>
															<option value="">Transport</option>
															<option value="">Student</option>
															<option value="">Parent</option>
														</select>
													</div>
													<div class="input-group input-group-two left-icon mb-20">
														<label class="w-100">Phone Number</label>
														<input type="text" id="mobile_code" class="form-control" placeholder="Phone Number" name="name"/>
													</div>
													<div class="input-group mt-4 input-group-two left-icon mb-20">

														<a href="/OTP" class="w-100"><button class="btn btn-danger w-100 text-white"
															type="button">Send OTP</button></a>

													</div>
												</div>

											</form>
											<p class="text-center text-secondary">Don't have an account ? <a href="/register"
													class="fw-bold text-danger mt-0 mt-md-4">Sign UP</a></p>
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

export default Login
