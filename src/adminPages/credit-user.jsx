import Header from "../components/header";
import "../styles/fund-wallet.css";
import AdminSideBar from "../components/sidebarAdmin";
import FundUser from "../components/dashboardComponent/funduser";
import FundUserDetails from "../components/dashboardComponent/fundUserDetails";
export default function CreditUser() {
	return (
		<div className="body">
			<AdminSideBar />
			<main>
				<Header />
				<Credit />
			</main>
		</div>
	);
}

function Credit() {
	return (
		<section className="main-content">
			<FundUser />
			<FundUserDetails />
		</section>
	);
}
