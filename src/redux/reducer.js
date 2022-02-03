import { ADD_TASK, REMOVE_TASK } from "./actions";

const initialData = {
	taskItems: [],
};

const taskReducer = (state = initialData, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				taskItems: [
					...state.taskItems,
					{ text: action.payload, completed: false },
				],
			};
		case REMOVE_TASK:
			return {
				...state,
				taskItems: [
					...state.taskItems.filter((task) => task.text !== action.payload),
				],
			};
		default:
			return state;
	}
};

export default taskReducer;
