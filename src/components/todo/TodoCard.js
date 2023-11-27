import "./todo.css";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

function TodoCard({ title, desc, id, delId, display }) {
	return (
		<div className="p-3 todo-card">
			<div>
				<h5>{title}</h5>
				<p className="todo-card-p">{desc.split("", 100)}...</p>
			</div>
			<div className="d-flex justify-content-around ">
				<div
					className="card-icon-head px-2 py-1"
					onClick={() => {
						display("block");
					}}
				>
					<MdModeEdit className="card-icons " />
					Update
				</div>
				<div
					className="card-icon-head px-2 py-1 text-danger"
					onClick={() => delId(id)}
				>
					<AiFillDelete className="card-icons del" />
					Delete
				</div>
			</div>
		</div>
	);
}
export default TodoCard;
