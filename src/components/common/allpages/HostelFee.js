import React, {useEffect} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const HostelFee = () => {
	useEffect(() => {
				window.scrollTo(0, 0);
			  });
  return (
    <div>
        <Header/>
    <div>
        <br/><br/><br/><br/>
      <div class="booking_section pb-115">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h4 class="fw-bold mb-4">Hostel Fee (2025- 2026)</h4>
					<div class="fee_table shadow p-3">
						<div class="table-responsive table_0">
							<table class="table border">
								<thead>
									<tr>
										<th>Sr.No</th>
										<th>Details</th>
										<th>Charges (In Rs.)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Hostel Room rent (For Six Months)</td>
										<td>1500/-</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Electricity and Water Charges (For Six Months)</td>
										<td>300/-</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Hostel/Mess Establishment/Services and Maintenance Fee (For Six Months)</td>
										<td>200/-</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Total (For Six Months)</td>
										<td>2000/-</td>
									</tr>
									<tr>
										<td>5</td>
										<td>Medical Fee (One Time)</td>
										<td>100/-</td>
									</tr>
									<tr>
										<td>6</td>
										<td>Mess Advance (For Two Months), if applicable</td>
										<td>1500/-</td>
									</tr>
									<tr>
										<td>7</td>
										<td>Mess Security Deposit (Refundable)</td>
										<td>500/-</td>
									</tr>
									<tr>
										<td>8</td>
										<td>Hostel Security (Refundable)</td>
										<td>1000/-</td>
									</tr>
									<tr>
										<td>9</td>
										<td>Furniture Security (Refundable)</td>
										<td>400/-</td>
									</tr>
									<tr>
										<td>10</td>
										<td>Mess Charge</td>
										<td>2000/-</td>
									</tr>
								</tbody>
							</table>
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

export default HostelFee
