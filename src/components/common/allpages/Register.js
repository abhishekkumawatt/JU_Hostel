import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import login from '../../../assets/img/hostel/login.png';

const Register = () => {
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
									<div class="col-md-6 col-lg-7 my-auto">
										<div class="multisteps-form__contents p-5">
											<h2>Register</h2>
											<h6>Sign up now to become a member</h6>
											<form action="#" class="mt-5">
												<div class="formgrid">
													<div class="row">
														<div class="col-md-12">
															<div class="input-group input-group-two left-icon mb-20">
																<label>User Roles</label>
																<select name="guest" id="guest" style={{display:"none"}}>
																	<option value="" selected="">-- Select --
																	</option>
																	<option value="">Admin</option>
																	<option value="">Warden</option>
																	<option value="">Transport</option>
																	<option value="">Student</option>
																	<option value="">Parent</option>
																</select>
															</div>
														</div>
														<div class="col-md-6">
															<div class="input-group input-group-two left-icon mb-20">
																<label class="w-100">Full Name</label>
																<input type="text" class="form-control"
																	placeholder="User Name" name="name"/>
															</div>
														</div>
														<div class="col-md-6">
															<div class="input-group input-group-two left-icon mb-20">
																<label>Gender</label>
																<select name="guest" id="guest" style={{display:"none"}}>
																	<option value="" selected="">-- Select --
																	</option>
																	<option value="">Male</option>
																	<option value="">Female</option>
																</select>
															</div>
														</div>
														
														<div class="col-md-6">
															<div class="input-group input-group-two left-icon mb-20">
																<label class="w-100">Email ID</label>
																<input type="email" class="form-control"
																	placeholder="email Id" name="name"/>
															</div>
														</div>
														<div class="col-md-6">
															<div class="input-group input-group-two left-icon mb-20">
																<label class="w-100">Date of Birth</label>
																<input type="date" class="form-control"
																	placeholder="Date of Birth" name="dob"/>
															</div>
														</div>
														<div class="col-md-6">
															<div class="input-group input-group-two left-icon mb-20">
																<label class="w-100">Upload Profile</label>
																<input type="file" class="form-control"
																	placeholder="profile" name="profile"/>
															</div>
														</div>
														<div class="col-md-6">
															<div class="input-group input-group-two left-icon mb-20">
																<label class="w-100">Phone Number</label>
																<input type="text" id="mobile_code" class="form-control"
																	placeholder="Phone Number" name="name"/>
															</div>
														</div>
														<div class="col-md-12">
															<div
																class="input-group mt-4 input-group-two left-icon mb-20">
																<button class="btn btn-danger w-100 text-white"
																	type="button">Register</button>
															</div>
														</div>
													</div>
												</div>

											</form>
											<p class="text-center text-secondary">Already a Member? <a href="/login"
													class="fw-bold text-danger mt-0 mt-md-4">Login Here</a></p>
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

export default Register
