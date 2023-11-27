import { ToastContainer, toast } from "react-toastify";
import HeadingComp from "./HeadingComp";
import "./signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
	const history = useNavigate();
	const [signinInputs, setSigninInputs] = useState({
		email: "",
		password: "",
	});
	const change = (e) => {
		const { name, value } = e.target;
		setSigninInputs({ ...signinInputs, [name]: value });
	};
	const submit = async (e) => {
		try {
			const response = await axios.post(
				"http://localhost:1000/api/v1/login",
				signinInputs
			);
			if (response.data) {
				toast.success("Sign-in successful");
				sessionStorage.setItem("id", response.data.others._id);
				history.push("/todo");
			} else {
				toast.error("Something went wrong");
			}
			console.log(signinInputs);
			setSigninInputs({
				email: "",
				password: "",
			});
		} catch (err) {
			if (err.response && err.response.data) {
				toast.error(err.response.data.message);
			} else {
				toast.error("Something went wrong");
			}
			console.log(err.message);
		}
	};
	return (
		<div className="signup">
			<ToastContainer />
			<div className="container">
				<div className="row">
					<div className="col-lg-8 d-flex justify-content-center align-items-center">
						<div className="d-flex flex-column w-100 p-5    ">
							<input
								className="p-2 my-3 input-signup"
								name="email"
								type="email"
								placeholder="Enter your Email"
								onChange={change}
								value={signinInputs.email}
							/>
							<input
								className="p-2 my-3 input-signup"
								name="password"
								type="password"
								placeholder="Enter your Password"
								onChange={change}
								value={signinInputs.password}
							/>
							<button className="btn-signup p-2" onClick={submit}>
								Sign In
							</button>
						</div>
					</div>
					<div className="border-start col-lg-4 d-flex justify-content-center align-items-center vh-100">
						<HeadingComp first="Sign" second="In" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Signin;
