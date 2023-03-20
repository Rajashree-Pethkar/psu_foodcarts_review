import { useAuth0 } from "@auth0/auth0-react";
import {Link, Route, Routes} from "react-router-dom";
import FoodCarts from "./foodcarts";
import Home from "./home";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";

export function NavMain() {
	return (
		<>
			<NavView/>
			<NavRoutes/>
		</>
	);
}

function NavView() {
    const { isAuthenticated } = useAuth0();
    return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="navbar-nav">
				<PublicLinksView/>
				{
					isAuthenticated ? <AuthLinksView /> : <NoAuthLinksView />
				}
			</div>
		</nav>
	);
}

function PublicLinksView() {
	return (
		<>
			<Link to="/">Home</Link>
		</>
	)
}

function AuthLinksView() {
	return (
		<>
			<Link to="/foodcarts">Foodcarts</Link>
			<Link to="/profile">Your Profile</Link>
			<Link to="/logout">Logout</Link>
		</>
	)
}

function NoAuthLinksView() {
	const { loginWithRedirect } = useAuth0();

	return (
		<>
			<Link to="" onClick={() => loginWithRedirect()}>Login</Link>
		</>
	)
}

function NavRoutes() {
	return (
		<Routes>
            <Route path="/" element={<Home/>}/>
			<Route path="/login" element={<LoginButton/>}/>
			<Route path="/logout" element={<LogoutButton/>}/>
			<Route path="/profile" element={<Profile/>}/>
			<Route path="/foodcarts" element={<FoodCarts/>}/>
		</Routes>
	);
}