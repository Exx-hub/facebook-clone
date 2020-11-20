import React from "react";
import "../styles/Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../firebase";
import { useStateValue } from "../contextAPI/GlobalContextProvider";

function Login() {
	const [, dispatch] = useStateValue();

	const handleSignIn = (e) => {
		e.preventDefault();
		console.log("signed in");

		auth
			.signInWithPopup(provider)
			.then((result) => {
				// console.log(result);
				dispatch({ type: "SET_USER", payload: result.user });
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<div className="login__logo">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
					alt=""
				/>
				<img
					src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
					alt=""
				/>
			</div>
			<Button type="submit" onClick={handleSignIn} variant="outlined">
				Sign In
			</Button>
		</div>
	);
}

export default Login;
