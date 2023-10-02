import { Reorder, AnimatePresence } from "framer-motion";

const variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	}
}


function Todos({ todos, setTodos, deleteTodo }) {


	return (
		<Reorder.Group
			as="ul"
			axys="y"
			values={todos}
			onReorder={setTodos}
		>
			<AnimatePresence initial={false}>
				{
					todos.map((todo) => (
						<TodoItem
							todo={todo}
							key={todo.title}
							deleteTodo={deleteTodo}
						/>
					))
				}
			</AnimatePresence>
		</Reorder.Group>
	);
}

function TodoItem({ todo, deleteTodo }) {

	return (
		<Reorder.Item
			className="TodoItem"
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				width: '400px',
				margin: '20px 0',
			}}
			value={todo}
			whileDrag={{
				scale: 1.1,
				color: 'red',
				fontWeight: 'bold',
			}}
			{...variants}
		>
			<span
				style={{
					width: '100%',
					border: '1px solid #000',
					borderRadius: '20px',
					padding: '20px',
					backgroundColor: 'white',
				}}
			>{todo.title}</span>
			<span
				style={{
					height: '100%',
					border: '1px solid #000',
					borderRadius: '20px',
					padding: '0 5px',
					backgroundColor: '#ffcdb3',
					cursor: 'pointer'
				}}
				onClick={() => deleteTodo(todo.id)}
			>X</span>
		</Reorder.Item>
	);
}

export default Todos;