import React from "react";
import "../styles/dashboard.css";
import WalletSection from "../components/dashboardComponent/walletSection";
import QuickLink from "../components/dashboardComponent/quickLinks";
import Analytics from "../components/dashboardComponent/analytics";
import TransactionHistory from "../components/dashboardComponent/transaction";
import SideBar from "../components/sidebar";
import Header from "../components/header";

function Dashboard() {
	return (
		<div className="body">
			<SideBar />
			<main>
				<Header />
				<MainContent />
			</main>
		</div>
	);
}

function MainContent() {
	return (
		<section className="main-content">
			<WalletSection />
			<QuickLink />
			<Analytics />
			<TransactionHistory />
		</section>
	);
}
export default Dashboard;
