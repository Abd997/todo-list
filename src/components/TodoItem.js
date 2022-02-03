import React from "react";
import stylesTodoItem from "./TodoItem.style";

function TodoItem({ task, removeTodo }) {
	const styles = stylesTodoItem();
	return (
		<div>
			<div className={styles.taskContainer}>
				<div className={styles.taskWrapper}>
					<p className={styles.taskText}>{task.text}</p>
					<div className={styles.iconsWrapper}>
						{/* complete icon */}
						<i className={`fas fa-check-circle ${styles.completeIcon}`} />
						{/* delete icon */}
						<i
							className={`fas fa-trash-alt ${styles.deleteIcon}`}
							onClick={() => {
								removeTodo(task.text);
								console.log("clicked");
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TodoItem;
