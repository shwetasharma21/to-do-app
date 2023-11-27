function Update({ display }) {
	return (
		<div className="p-3 d-flex flex-column justify-content-start align-items-center update">
			<h3>Update your task</h3>
			<input type="text" className="todo-inputs my-4 w-100 p-3" />
			<textarea className="todo-inputs w-100 p-3" />
			<div>
				<button className="btn btn-dark my-4">Update</button>
				<button
					className="btn btn-danger mx-3 my-4"
					onClick={() => display("none")}
				>
					Close
				</button>
			</div>
		</div>
	);
}
export default Update;
