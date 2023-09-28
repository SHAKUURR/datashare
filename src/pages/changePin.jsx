import "../styles/changePassword.css";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import PinProfile from "../components/SettingsComponent/pinProfile";
import Activity from "../components/activity";

export default function ChangePin() {
	return (
		<div className="body">
			<SideBar />
			<main>
				<Header />
				<ChangePinContent />
			</main>
		</div>
	);
}

function ChangePinContent() {
	return (
		<section className="main-content">
			<PinProfile />
			<Activity />
		</section>
	);
}
