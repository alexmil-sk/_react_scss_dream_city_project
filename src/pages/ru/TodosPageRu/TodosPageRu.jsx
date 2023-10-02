import "./TodosPageRu.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CreateTodo from "./CreateTodo.jsx";
import Todos from "./Todos.jsx";

const defaultTodos = [
	{ id: 1, title: "Learn framer motion", completed: false },
	{ id: 2, title: "Create nice animation", completed: false },
	{ id: 3, title: "Use Recorder component", completed: false }
];

function TodosPageRu() {



	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || defaultTodos);

	function deleteTodo(id) {
		setTodos(todos.filter(item => item.id !== id));
	}

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	return (
		<motion.div
			className="todos"

			animate={i => ({
				opacity: 1,
				y: 0,
				transition: {
					delay: i * 0.5,
					duration: 1.5,
					type: 'just',
					ease: 'linear'
				}
			})}
			initial={{
				opacity: 0,
				y: -2000,
			}}
		>
			<div className="todos__container">
				<div className="todos__wrapper">
					<h1>Todos Page 1</h1>
					<CreateTodo onCreate={setTodos} todos={todos} />
					<Todos todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} />
				</div>
			</div>
		</motion.div>
	)
}

export default TodosPageRu;