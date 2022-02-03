import React, { useState } from "react";
import styles from "./AddTodo.styles";

export default function AddTodo({ addTodo }) {
	const [todo, setTodo] = useState("");

	return (
		<div>
			<input
				style={styles.inputFields}
				placeholder=" Enter text"
				onChange={(e) => {
					setTodo(e.target.value);
				}}
				value={todo}
			/>
			<button
				style={styles.submitButton}
				onClick={() => {
					addTodo(todo);
					setTodo("");
				}}
			>
				Add
			</button>
		</div>
	);
}
