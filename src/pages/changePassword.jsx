import "../styles/changePassword.css";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import Profile from "../components/SettingsComponent/profile";
import Activity from "../components/activity";

export default function ChangePassword() {
	return (
		<div className="body">
			<SideBar />
			<main>
				<Header />
				<ChangePasswordContent />
			</main>
		</div>
	);
}

function ChangePasswordContent() {
	return (
		<section className="main-content">
			<Profile />
			<Activity />
		</section>
	);
}
