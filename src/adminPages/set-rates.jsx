import "../styles/set-rates.css";
import Header from "../components/header";
import AdminSideBar from "../components/sidebarAdmin";
export default function SetRates() {
	return (
		<div className="body">
			<AdminSideBar />
			<main>
				<Header />
				<Rates />
			</main>
		</div>
	);
}

function Rates() {
	function handleBackClick() {
		window.history.back();
	}
	return (
		<section className="main-content">
			<section className="rates">
				<button onClick={handleBackClick} className="back">
					<i className="fa-solid fa-arrow-left"></i> Back
				</button>

				<form action="" method="">
					<h2>Set Rates</h2>
					<div className="rate">
						<select name="amount" id="">
							<option value="" disabled hidden selected>
								1
							</option>
						</select>
						<select name="data" id="">
							<option value="" disabled hidden selected>
								49gb
							</option>
						</select>
						<input type="number" name="rate" id="" placeholder="250" />
					</div>
					<div className="rate">
						<select name="amount" id="">
							<option value="" disabled hidden selected>
								50
							</option>
						</select>
						<select name="data" id="">
							<option value="" disabled hidden selected>
								249gb
							</option>
						</select>
						<input type="number" name="rate" id="" placeholder="240" />
					</div>
					<div className="rate">
						<select name="amount" id="">
							<option value="" disabled hidden selected>
								350
							</option>
						</select>
						<select name="data" id="">
							<option value="" disabled hidden selected>
								449gb
							</option>
						</select>
						<input type="number" name="rate" id="" placeholder="240" />
					</div>
					<div className="rate">
						<select name="amount" id="">
							<option value="" disabled hidden selected>
								500
							</option>
						</select>
						<select name="data" id="">
							<option value="" disabled hidden selected>
								999gb
							</option>
						</select>
						<input type="number" name="rate" id="" placeholder="235" />
					</div>
					<div className="rate">
						<select name="amount" id="">
							<option value="" disabled hidden selected>
								1000
							</option>
						</select>
						<select name="data" id="">
							<option value="" disabled hidden selected>
								1999gb
							</option>
						</select>
						<input type="number" name="rate" id="" placeholder="235" />
					</div>
					<div className="rate">
						<select name="amount" id="">
							<option value="" disabled hidden selected>
								2000
							</option>
						</select>
						<select name="data" id="">
							<option value="" disabled hidden selected>
								49999gb
							</option>
						</select>
						<input type="number" name="rate" id="" placeholder="230" />
					</div>
					<button type="submit">Save Changes</button>
					<button type="reset">Cancel</button>
				</form>
			</section>
		</section>
	);
}
