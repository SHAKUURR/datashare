import React from "react";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import Bundle from "../components/vendataComponent/bundle";
import Activity from "../components/activity";

function BuyBundle() {
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
			<Bundle />
			<Activity />
		</section>
	);
}
export default BuyBundle;
