import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import blog01img from '../../../assets/img/blog/01.jpg';

const NewsDetails = () => {
  return (
    <div>
        <Header/>
        <br/><br/><br/><br/>
      <section class="latest-news bg-white pb-70">
		<div class="container">
	
			{/* <!-- Latest post loop --> */}
			<div class="row mt-40">
				<div class="col-lg-12">
					<div class="news-details-box">
					  <div class="entry-content">
						<h2 class="title">Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.
						</h2>
						<div class="post-img mb-4">
							<img src={blog01img} width="100%" class="img-fluid" alt=""/>
						</div>
						
						<ul class="post-meta">
						  <li><a href="#"><i class="fal fa-user"></i>by Piklo D. Sindom</a></li>
						  <li><a href="#"><i class="fal fa-calendar-alt"></i>24th March 2019</a></li>
						</ul>
						
						<p class="mb-30">
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
						  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						  mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
						  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
						  inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
						  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
						  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
						  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
						  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
						</p>
						<p>
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
						  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
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
		<img src="assets/img/hostel/client-logo.png" class="img-fluid" alt=""/>
	</div>
	{/* <!-- our client end --> */}
    <Footer/>
    </div>
  )
}

export default NewsDetails
