import "./todo.css";
import "../home/home.css";
import TodoCard from "./TodoCard";
import Update from "./Update";
import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";

function Todo() {
	const [inputs, setInputs] = useState({ title: "", desc: "" });
	const [array, setArray] = useState([]);
	const show = () => {
		document.getElementById("textarea").style.display = "block";
	};
	const change = (e) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};
	const submit = () => {
		if (inputs.title === "" && inputs.desc === "")
			toast.error("'Title' or 'Description' can not be empty");
		else {
			setArray([...array, inputs]);
			setInputs({ title: "", desc: "" });
			toast.success("Your task is added");
			toast.error("Your task is not saved! Please Sign up");
		}
	};
	const del = (id) => {
		const newArray = array.filter((item, index) => index !== id);
		setArray(newArray);
	};
	const display = (value) => {
		console.log(value);
		document.getElementById("todo-update").style.display = value;
	};
	return (
		<div className="todo">
			<ToastContainer />
			<div className="todo-main container d-flex justify-content-center align-items-center flex-column ">
				<div className="d-flex flex-column todo-input-container w-50 p-1">
					<input
						type="text"
						onChange={change}
						placeholder="Title"
						className="my-2 p-2 todo-inputs"
						onClick={show}
						name="title"
						value={inputs.title}
					/>
					<textarea
						id="textarea"
						type="text"
						onChange={change}
						placeholder="Description"
						className="p-2 todo-inputs"
						name="desc"
						value={inputs.desc}
					/>
				</div>
				<div className="d-flex w-50 justify-content-center">
					<button className="home-btn px-2 py-1 my-3" onClick={submit}>
						Add
					</button>
				</div>
			</div>
			<div className="todo-body">
				<div className="container-fluid">
					<div className="row">
						{array &&
							array.map((item, index) => {
								return (
									<div className="col-lg-3 col-9 mx-5 my-2" key={index}>
										<TodoCard
											title={item.title}
											desc={item.desc}
											id={index}
											delId={del}
											display={display}
										/>
									</div>
								);
							})}
					</div>
				</div>
			</div>
			<div className="todo-update" id="todo-update">
				<div className="container update">
					<Update display={display} />
				</div>
			</div>
		</div>
	);
}
export default Todo;
