import { Link } from "react-router-dom";

function AdminQuickLink() {
	return (
		<section className="quick-links">
			<h2>Quick Links</h2>
			<div className="links-container">
				<Link to={"/credit-user"} className="link">
					<i className="fa-solid fa-signal fa-2x"></i>
					<p>Fund User Wallet</p>
				</Link>
				<Link to={"/manage-user"} className="link">
					<i className="fa-solid fa-phone fa-2x"></i>
					<p>Manage User</p>
				</Link>
			</div>
		</section>
	);
}

export default AdminQuickLink;
