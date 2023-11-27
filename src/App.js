import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Signin from "./components/signup/Signin";
import Todo from "./components/todo/Todo";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/todo" element={<Todo />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route exact path="/signin" element={<Signin />} />
				</Routes>
			</Router>

			<Footer />
		</div>
	);
}
export default App;
