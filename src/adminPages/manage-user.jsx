import AdminSideBar from "../components/sidebarAdmin";
import Header from "../components/header";
import ManageTable from "../components/dashboardComponent/manageTable";
import ChangeUserInfo from "../components/dashboardComponent/changeuser";
import "../styles/manageuser.css";

export default function ManageUser() {
	return (
		<div className="body">
			<AdminSideBar />
			<main>
				<Header />
				<Manage />
			</main>
		</div>
	);
}

function Manage() {
	return (
		<div className="main-content">
			<ManageTable />
			<ChangeUserInfo />
		</div>
	);
}
