import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";
import { addTask, removeTask } from "../redux/actions";
import styles from "./Main.styles";

export class Main extends Component {
	render() {
		return (
			<div style={styles.appContainer}>
				<div style={styles.container}>
					<h1 style={styles.title}>TODO LIST APP</h1>

					{/* Add tasks through this div */}
					<div style={styles.inputWrapper}>
						<AddTodo addTodo={(task) => this.props.addTodo(task)} />
						<hr style={styles.separator} />
					</div>

					{/* Show all added tasks */}
					{this.props.taskItems.map((_task) => {
						console.log({ _task });
						return (
							<TodoItem
								task={_task}
								removeTodo={(prop_task) => this.props.removeTodo(prop_task)}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	taskItems: state.taskItems,
});

const mapDispatchToProps = (dispatch) => ({
	addTodo: (task) => dispatch(addTask(task)),
	removeTodo: (task) => dispatch(removeTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
