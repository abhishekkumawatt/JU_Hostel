import React, {useEffect} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import hotelroom from '../../../assets/img/hostel/hotel-room.png';
import activehotelroom from '../../../assets/img/hostel/active-room.png'
import { Link } from 'react-router-dom';


const HostelBookingRoom = () => {
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
				<div class="bg_transparent p-3">
					<div class="rounded card border-0 shadow-sm">
						<div class="card-body hover_floor">
							<div class="row">
								<div class="col-md-12">
									<div class="heading_title mb-3">
										<h5 class="fw-bold">Room</h5>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor">
										<Link to="/hostel-booking-room-details"><img src={hotelroom}
											class="img-fluid" alt="" />
										<span>Room No. 101</span>
									</Link>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor">
										<Link to="/hostel-booking-room-details"><img src={hotelroom}
											class="img-fluid" alt="" />
											<span>Room No. 102</span>
										</Link>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor">
										<Link to="/hostel-booking-room-details"><img src={hotelroom}
											class="img-fluid" alt="" />
											<span>Room No. 103</span>
										</Link>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor">
										<Link to="/hostel-booking-room-details"><img src={hotelroom}
											class="img-fluid" alt="" />
											<span>Room No. 104</span>
										</Link>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor">
										<Link to="/hostel-booking-room-details"><img src={hotelroom}
											class="img-fluid" alt="" />
											<span>Room No. 104</span>
										</Link>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor">
										<Link to="/hostel-booking-room-details"><img src={hotelroom}
											class="img-fluid" alt="" />
											<span>Room No. 104</span>
										</Link>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor">
										<Link to="/hostel-booking-room-details"><img src={hotelroom}
											class="img-fluid" alt="" />
											<span>Room No. 104</span>
										</Link>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor">
										<Link to="/hostel-booking-room-details"><img src={hotelroom}
											class="img-fluid" alt="" />
											<span>Room No. 104</span>
										</Link>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor">
										<Link to="/hostel-booking-room-details"><img src={hotelroom}
											class="img-fluid" alt="" />
											<span>Room No. 104</span>
										</Link>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor">
										<Link to="/hostel-booking-room-details"><img src={hotelroom}
											class="img-fluid" alt="" />
											<span>Room No. 104</span>
										</Link>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor active_room">
										<Link to="/hostel-booking-room-details"><img src={activehotelroom}
											class="img-fluid" alt="" />
											<span>Room No. 104</span>
										</Link>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor">
										<Link to="/hostel-booking-room-details"><img src={hotelroom}
											class="img-fluid" alt="" />
											<span>Room No. 104</span>
										</Link>
									</div>
								</div>
								<div class="col-md-3 col-lg-2">
									<div class="floorblog hostelrooms hover_floor">
										<Link to="/hostel-booking-room-details"><img src={hotelroom}
											class="img-fluid" alt="" />
											<span>Room No. 104</span>
										</Link>
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

export default HostelBookingRoom
