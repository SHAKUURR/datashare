import React from "react";
import "../styles/transactions.css";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import Activity from "../components/activity";
import TransactionTable from "../components/TransactionComponent/transactionTable";

function Transactions() {
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
			<TransactionTable />
			<Activity />
		</section>
	);
}

export default Transactions;
