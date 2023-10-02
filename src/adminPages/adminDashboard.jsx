import "../styles/dashboard.css";
import WalletSection from "../components/dashboardComponent/walletSection";
import AdminQuickLink from "../components/dashboardComponent/quickLinksAdmin";
import Analytics from "../components/dashboardComponent/analytics";
import TransactionHistory from "../components/dashboardComponent/transaction";
import AdminSideBar from "../components/sidebarAdmin";
import Header from "../components/header";

function AdminDashboard() {
	return (
		<div className="body">
			<AdminSideBar />
			<main>
				<Header />
				<AdminMainContent />
			</main>
		</div>
	);
}

function AdminMainContent() {
	return (
		<section className="main-content">
			<WalletSection />
			<AdminQuickLink />
			<Analytics />
			<TransactionHistory />
		</section>
	);
}
export default AdminDashboard;
