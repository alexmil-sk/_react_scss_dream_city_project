import "./TodosPage.scss";
import { Reorder } from "framer-motion";
import { useState, useEffect } from "react";
import CreateTodo from "./CreateTodo.jsx";
import Todos from "./Todos.jsx";

const defaultTodos = [
	{ id: 1, title: "Learn framer motion", completed: false },
	{ id: 2, title: "Create nice animation", completed: false },
	{ id: 3, title: "Use Recorder component", completed: false }
];

function TodosPage() {



	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || defaultTodos);

	function deleteTodo(id) {
		setTodos(todos.filter(item => item.id !== id));
	}

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	return (
		<div className="todos">
			<div className="todos__container">
				<div className="todos__wrapper">
					<h1>Todos Page 1</h1>
					<CreateTodo onCreate={setTodos} todos={todos} />
					<Todos todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} />
				</div>
			</div>
		</div>
	)
}

export default TodosPage;