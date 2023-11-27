import { useState } from "react";
import HeadingComp from "./HeadingComp";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
	const history = useNavigate();
	const [signupInputs, setSignupInputs] = useState({
		email: "",
		userName: "",
		password: "",
	});
	const change = (e) => {
		const { name, value } = e.target;
		setSignupInputs({ ...signupInputs, [name]: value });
	};
	const submit = async (e) => {
		const response = await axios.post(
			"http://localhost:1000/api/v1/register",
			signupInputs
		);
		console.log(response);
		if (response.data.message === "User already exists") {
			alert(response.data.message);
		} else {
			alert(response.data.message);
			e.preventDefault();
			console.log(signupInputs);
			setSignupInputs({
				email: "",
				userName: "",
				password: "",
			});
			history("/signin");
		}
	};
	return (
		<div className="signup">
			<div className="container">
				<div className="row">
					<div className=" col-lg-4 d-flex justify-content-center align-items-center vh-100">
						<HeadingComp first="Sign" second="Up" />
					</div>
					<div className="col-lg-8 d-flex justify-content-center align-items-center">
						<div className="d-flex flex-column w-100 p-5    ">
							<input
								className="p-2 my-3 input-signup"
								name="email"
								type="email"
								placeholder="Enter your Email"
								onChange={change}
								value={signupInputs.email}
							/>
							<input
								className="p-2 my-3 input-signup"
								name="userName"
								type="username"
								placeholder="Enter your Username"
								onChange={change}
								value={signupInputs.userName}
							/>
							<input
								className="p-2 my-3 input-signup"
								name="password"
								type="password"
								placeholder="Enter your Password"
								onChange={change}
								value={signupInputs.password}
							/>
							<button className="btn-signup p-2" onClick={submit}>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Signup;
