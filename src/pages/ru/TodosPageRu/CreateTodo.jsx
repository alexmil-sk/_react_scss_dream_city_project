
function CreateTodo({ onCreate, todos }) {

	function handleSubmit(e) {
		e.preventDefault();
		const title = e.target.todo.value;

		if (e.target.todo.value) {
			onCreate((prevTools) => [
				...prevTools,
				{
					title,
					completed: false,
					id: Date.now(),
				}
			]);

			localStorage.setItem('todos', JSON.stringify(todos))
			e.target.reset();
		}
}

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<input placeholder="New todo" name="todo" />
			<input  type="submit" value="Add Todo" />
		</form>
	)
}

export default CreateTodo;