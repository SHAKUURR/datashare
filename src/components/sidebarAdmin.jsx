import React from "react";
import "../styles/sidebar.css";
import { useLocation, Link } from "react-router-dom";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";

function AdminSideBar() {
	// const [currentMenu, setCurrentMenu] = useState("/dashboard");
	// function handleMenuClick(to) {
	// 	setCurrentMenu(to);
	// }
	const router = useLocation("/dashboard");
	// const [isDropdownOpen, setDropdownOpen] = useState(false);

	// const toggleDropdown = () => {
	// 	setDropdownOpen(!isDropdownOpen);
	// };
	return (
		<section className="sidebar" id="sidebar">
			<img src="/img/Logo2.png" alt="Data Share Portal Logo" />
			<div className="account">
				<div className="aka">SA</div>
				<p className="currentusername">Adedokun Peace</p>
			</div>
			<hr />
			<div className="menu">
				<Link
					to={"/dashboard"}
					className={`menu-item ${
						router.pathname.includes("/dashboard") ? "current-page" : ""
					}`}
				>
					<i className="fa-solid fa-table fa-lg"></i>
					<p>DashBoard</p>
				</Link>
				<Link
					to={"/vendata"}
					className={`menu-item ${
						router.pathname.includes("/vendata") ? "current-page" : ""
					}`}
				>
					<i className="fa-regular fa-credit-card fa-lg"></i>
					<p>Vend Data</p>
				</Link>
				<Link
					to={"/transactions"}
					className={`menu-item ${
						router.pathname.includes("/transactions") ? "current-page" : ""
					}`}
				>
					<i className="fa-solid fa-list fa-lg"></i>
					<p>Transactions</p>
				</Link>
				<Link to="/analytics" className="menu-item">
					<i className="fa-solid fa-chart-line fa-lg"></i>
					<p>Analytics</p>
				</Link>
				<Accordion allowToggle>
					<AccordionItem>
						<h2>
							<AccordionButton
								className={`${
									router.pathname.includes("/resetapi") ||
									router.pathname.includes("/changepin") ||
									router.pathname.includes("/changepassword")
										? "reset-api-button"
										: ""
								}`}
							>
								<i className="fa-solid fa-gear fa-lg"></i>
								<Box as="span" flex="1" textAlign="left">
									Settings
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							<Box className="linkk">
								<Link to={"/changepassword"} className="sub-link">
									&#8226; Change Password
								</Link>
							</Box>
							<Box className="linkk">
								<Link to={"/changepin"} className="sub-link">
									&#8226; Change Pin
								</Link>
							</Box>
							<Box className="linkk">
								<Link to={"/resetapi"} className="sub-link">
									&#8226; Reset API Key
								</Link>
							</Box>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
				<a href="./api-setup.html" class="menu-item">
					<i class="fa-solid fa-sliders fa-lg"></i>
					<p>API Setup</p>
				</a>
				<a href="./set-rates.html" class="menu-item">
					<i class="fa-solid fa-chart-simple"></i>
					<p>Set Rates</p>
				</a>
				<a href="./routing1.html" class="menu-item">
					<i class="fa-solid fa-sliders fa-lg"></i>
					<p>Routing</p>
				</a>
				<a href="./vendors.html" class="menu-item">
					<i class="fa-solid fa-sliders fa-lg"></i>
					<p>Vendors</p>
				</a>
			</div>
			<Link to={"/login"}>
				<div className="logout" id="logout">
					<i className="fa-solid fa-arrow-left"></i>
					<p>Logout</p>
				</div>
			</Link>
		</section>
	);
}

export default AdminSideBar;
