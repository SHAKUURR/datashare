import React from "react";
import "../styles/vendata.css";
import "../styles/activity.css";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import Activity from "../components/activity";
import Vend from "../components/vendataComponent/vend";

function VendData() {
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
			<Vend />
			<Activity />
		</section>
	);
}

export default VendData;
