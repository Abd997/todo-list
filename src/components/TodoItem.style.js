import { makeStyles } from "@material-ui/core";

const stylesTodoItem = makeStyles(() => ({
	taskContainer: {
		justifyContent: "center",
		display: "flex",
	},
	taskWrapper: {
		marginBottom: 12,
		width: "79%",
		textAlign: "center",
		alignSelf: "center",
		borderRadius: 4,
		display: "flex",
		justifyContent: "space-between",
		boxShadow: "0 10px 15px 15px rgba(0,0,0,0.1)",
	},
	taskText: {
		textAlign: "right",
		textDecoration: "none",
		paddingLeft: 20,
	},
	iconsWrapper: {
		paddingTop: 5,
	},
	completeIcon: {
		fontSize: 22,
		paddingTop: 10,
		paddingRight: 10,
		color: "darkgreen",
	},
	deleteIcon: {
		fontSize: 22,
		paddingTop: 10,
		paddingRight: 10,
		color: "darkred",
	},
}));

export default stylesTodoItem;
