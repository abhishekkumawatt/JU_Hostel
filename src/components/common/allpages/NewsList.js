import React, {useEffect} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import post01img from '../../../assets/img/latest-post/01.png'
import post02img from '../../../assets/img/latest-post/02.png'
import post03img from '../../../assets/img/latest-post/03.png'
import clientlogo from '../../../assets/img/hostel/client-logo.png'
import { Link } from 'react-router-dom';


const NewsList = () => {
	useEffect(() => {
				window.scrollTo(0, 0);
			  });
  return (
    <div>
		<Header/>
		<br/><br/><br/>
      <section class="latest-news bg-white pt-70 pb-70">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-12 text-center">
					<div class="section-title">
						<span class="title-tag">News</span>
						<h2>Our Latest News</h2>
					</div>
				</div>

			</div>
			{/* <!-- Latest post loop --> */}
			<div class="row mt-40">
				<div class="col-lg-4">
					<div class="latest-post-box">
						<div class="post-img">
							<img src={post01img} alt=""/>
						</div>
						<div class="post-desc">
							<ul class="post-meta">
								<li>
									<Link to="#"><i class="fal fa-calendar-alt"></i>18 Dec. 2024 11:56 am</Link>
								</li>

							</ul>
							<h4><Link to="/news-details">6 Summer Programes for Indian students in international colleges</Link></h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore.
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="latest-post-box">
						<div class="post-img">
							<img src={post02img} alt=""/>
						</div>
						<div class="post-desc">
							<ul class="post-meta">
								<li>
									<Link to="#"><i class="fal fa-calendar-alt"></i>23rd March 2019</Link>
								</li>
								<li>
									<Link to="#"><i class="fal fa-user"></i>By Admin</Link>
								</li>
							</ul>
							<h4><Link to="/news-details">Each of our 8 double rooms has its own distinct.</Link></h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore.
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="latest-post-box">
						<div class="post-img">
							<img src={post03img} alt=""/>
						</div>
						<div class="post-desc">
							<ul class="post-meta">
								<li>
									<Link to="#"><i class="fal fa-calendar-alt"></i>23rd March 2019</Link>
								</li>
								<li>
									<Link to="#"><i class="fal fa-user"></i>By Admin</Link>
								</li>
							</ul>
							<h4><Link to="/news-details">Each of our 8 double rooms has its own distinct.</Link></h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore.
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="latest-post-box">
						<div class="post-img">
							<img src={post03img} alt=""/>
						</div>
						<div class="post-desc">
							<ul class="post-meta">
								<li>
									<Link to="#"><i class="fal fa-calendar-alt"></i>23rd March 2019</Link>
								</li>
								<li>
									<Link to="#"><i class="fal fa-user"></i>By Admin</Link>
								</li>
							</ul>
							<h4><Link to="/news-details">Each of our 8 double rooms has its own distinct.</Link></h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore.
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="latest-post-box">
						<div class="post-img">
							<img src={post01img} alt=""/>
						</div>
						<div class="post-desc">
							<ul class="post-meta">
								<li>
									<Link to="#"><i class="fal fa-calendar-alt"></i>23rd March 2019</Link>
								</li>
								<li>
									<Link to="#"><i class="fal fa-user"></i>By Admin</Link>
								</li>
							</ul>
							<h4><Link to="/news-details">Each of our 8 double rooms has its own distinct.</Link></h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!--====== LATEST NEWS END ======-->
	<!-- our client --> */}
	<div class="text-center">
		<img src={clientlogo} class="img-fluid" alt=""/>
	</div>
	{/* <!-- our client end --> */}
	<Footer/>
    </div>
  )
}

export default NewsList
