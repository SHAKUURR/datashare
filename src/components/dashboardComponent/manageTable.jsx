export default function ManageTable() {
	function handleBackClick() {
		window.history.back();
	}
	return (
		<div className="table">
			<div onClick={handleBackClick} className="clickable back">
				<i className="fa-solid fa-arrow-left"></i> Back
			</div>
			<div className="table-container">
				<table>
					<tr>
						<th>
							<input type="checkbox" name="" id="" />
						</th>
						<th>Name</th>
						<th>Phone Number</th>
					</tr>
					<tr>
						<td>
							<input type="checkbox" name="" id="" />
						</td>
						<td>
							<div className="account">
								<div className="img"></div>
								<div className="text">
									<h5>John Micheal</h5>
									<p>john@gmail.com</p>
								</div>
							</div>
						</td>
						<td className="number">08134872345</td>
						<td>
							<i className="fa-solid fa-pencil"></i>
						</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" name="" id="" />
						</td>
						<td>
							<div className="account">
								<div className="img"></div>
								<div className="text">
									<h5>Alex Sule</h5>
									<p>alexsule@yahoo.com</p>
								</div>
							</div>
						</td>
						<td className="number">08129384859</td>
						<td>
							<i className="fa-solid fa-pencil"></i>
						</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" name="" id="" />
						</td>
						<td>
							<div className="account">
								<div className="img"></div>
								<div className="text">
									<h5>Matthew Caleb</h5>
									<p>matthew@gmail.com</p>
								</div>
							</div>
						</td>
						<td className="number">09012347586</td>
						<td>
							<i className="fa-solid fa-pencil"></i>
						</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" name="" id="" />
						</td>
						<td>
							<div className="account">
								<div className="img"></div>
								<div className="text">
									<h5>Atiku Abubakar</h5>
									<p>olule@gmail.com</p>
								</div>
							</div>
						</td>
						<td className="number">09123784657</td>
						<td>
							<i className="fa-solid fa-pencil"></i>
						</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" name="" id="" />
						</td>
						<td>
							<div className="account">
								<div className="img"></div>
								<div className="text">
									<h5>Ahmed Tinubu</h5>
									<p>emilokan@gmail.com</p>
								</div>
							</div>
						</td>
						<td className="number">08033465789</td>
						<td>
							<i className="fa-solid fa-pencil"></i>
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}
