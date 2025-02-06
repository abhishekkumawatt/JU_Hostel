import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const ContactUs = () => {
  return (
    <div>
        <Header/>
      <section class="contact-part pt-115 pb-115">
        <div class="container">
            {/* <!-- Contact Info --> */}
            <div class="contact-info">
                <div class="row justify-content-center">
                    <div class="col-lg-12 col-sm-12 text-center mb-5">
						<div class="section-title text-lg-left">
							<span class="title-tag">Contact</span>
							<h2 class="text-danger">Get In Touch !</h2>
						</div>
					</div>
                    <div class="col-lg-4 col-sm-12">
						<div class="bg-light py-3">
						<div class="p-4">
                        <h3 class="fw-bold mb-3">Contact information</h3>
						<p>Fill up the form and our Team will get back to your 24 hours.</p>
					</div>
						<div class="info-box">
                            <div class="icon">
                                <i class="flaticon-phone"></i>
                            </div>
                            <div class="desc">
                                <h6>Phone Number</h6>
                                <p>+91 8975642683, 9987564589</p>
                            </div>
                        </div>
                   
                        <div class="info-box">
                            <div class="icon">
                                <i class="flaticon-message"></i>
                            </div>
                            <div class="desc">
                                <h6>Email Address</h6>
                                <p>info@gmail.com</p>
                            </div>
                        </div>
						<div class="info-box">
                            <div class="icon">
                                <i class="flaticon-home"></i>
                            </div>
                            <div class="desc">
                                <h6>Office Address</h6>
                                <p>19/A, Cirikon City hall Tower New York, NYC</p>
                            </div>
                        </div>
					</div>
                    </div>
					<div class="col-lg-8 col-sm-12">
					<div class="contact-form">
						<form action="#">
							<div class="row">
								<div class="col-md-6">
									<div class="input-group mb-30">
										<label>First Name</label>
										<span class="icon"><i class="far fa-user"></i></span>
										<input type="text" placeholder="Your full name"/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-group mb-30">
										<label>Email ID</label>
										<span class="icon"><i class="far fa-envelope"></i></span>
										<input type="email" placeholder="Enter email address"/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-group mb-30">
										<label>Phone No.</label>
										<span class="icon"><i class="far fa-phone"></i></span>
										<input type="text" placeholder="Add phone number"/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-group mb-30">
										<label>Subject</label>
										<span class="icon"><i class="far fa-book"></i></span>
										<input type="text" placeholder="Select Subject"/>
									</div>
								</div>
								<div class="col-12">
									<div class="input-group textarea mb-30">
										<label>Message</label>
										<span class="icon"><i class="far fa-pen"></i></span>
										<textarea type="text" placeholder="Enter messages"></textarea>
									</div>
								</div>
								<div class="col-12">
									<button type="submit" class="main-btn btn-filled">Get Free Quote</button>
								</div>
							</div>
						</form>
					</div>
					</div>
                </div>
            </div>
            
        </div>
    </section>
	<div>
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.43602619463!2d75.62574632182506!3d26.88542138958921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1735370792894!5m2!1sen!2sin" width="100%" height="450" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
	</div>
    <Footer/>
    </div>
  )
}

export default ContactUs
