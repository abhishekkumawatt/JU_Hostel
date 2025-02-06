import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="footer-two">
		<div class="footer-widget-area light-theme">
			<div class="container-fluid">
				<div class="bg-light p-3 p-lg-5 rounded">
					<div class="row">
						<div class="col-lg-3 col-sm-6">
							{/* <!-- Site Info Widget --> */}
							<div class="widget site-info-widget mb-50">
								<div class="footer-logo mb-50">
									{/* <!-- <img src="assets/img/footer-logo.png" alt="Logo"> --> */}
									<h2 class="fw-bold">Ju Hostel</h2>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed doing eius mod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitat ion ullamco laboris nisi.
								</p>

							</div>
						</div>
						<div class="col-lg-3">
							{/* <!-- Nav Widget --> */}
							<div class="widget nav-widget mb-50">
								<div>
									<h4 class="widget-title">
										Quick Links</h4>
									<ul>
										<li><a href="/contact-us">Contact Us</a></li>
										<li><a href="/hostel-rules">Rules & Regulations </a></li>
										<li><a href="/news-list">News/Announcements</a></li>

									</ul>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-sm-6">
							{/* <!-- Contact Widget --> */}
							<div class="widget contact-widget mb-50">
								<h4 class="widget-title">Contact Us</h4>
								<div class="contact-lists">
									<div class="contact-box">
										<div class="icon">
											<i class="flaticon-call"></i>
										</div>
										<div class="desc">
											<h6 class="title">Phone Number</h6>
											+91 12324567892
										</div>
									</div>
									<div class="contact-box">
										<div class="icon">
											<i class="flaticon-message"></i>
										</div>
										<div class="desc">
											<h6 class="title">Email Address</h6>
											<a href="#">info@gmail.com</a>
										</div>
									</div>
									<div class="contact-box">
										<div class="icon">
											<i class="flaticon-location-pin"></i>
										</div>
										<div class="desc">
											<h6 class="title">Office Address</h6>
											14/A, Miranda City, NYC
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 subscribe-text">
							{/* <!-- Nav Widget --> */}
							<div class="widget nav-widget mb-50">
								<div>
									<h4 class="widget-title">Get the latest information</h4>
									<ul>
										<li>Newsletter</li>
									</ul>
									<form action="#" class="subscribe-form mt-50">
										<input type="email" placeholder="Enter email address"/>
										<button type="submit">Subscribe</button>
									</form>
									<div class="widget site-info-widget">
										<h4 class="widget-title mb-2 mt-4">Social Media</h4>
										<div class="social-links mt-40">
											<a href="#"><i class="fab fa-facebook-f"></i></a>
											<a href="#"><i class="fab fa-twitter"></i></a>
											<a href="#"><i class="fab fa-behance"></i></a>
											<a href="#"><i class="fab fa-linkedin"></i></a>
											<a href="#"><i class="fab fa-youtube"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="copyright-area py-4">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6 col-md-5 order-2 order-md-1">
						<p class="copyright-text copyright-two">Copyright @ 2025 Ju Hostel. All Rights Reserved.</p>
					</div>
					<div class="col-lg-6 col-md-7 order-1 order-md-2">
						<div class="footer-menu text-center text-md-end">
							<ul>
								<li><a href="/terms-conditions">Terms & Conditions</a></li>
								<li><a href="/privacy-policy">Privacy Policy</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    </div>
  )
}

export default Footer
