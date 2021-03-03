import { Theme, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";

export const SearchTextField = withStyles((theme: Theme) => ({
	root: {
		"& .MuiOutlinedInput-root": {
			borderRadius: 17,
			backgroundColor: "#fff",
			padding: 0,
			paddingLeft: 15,
			paddingRight: 15,
			fontSize: 12,
			fontWeight: "bold",
			"&.Mui-focused": {
				backgroundColor: "#fff",
				"& fieldset": { borderWidth: 1, borderColor: "transparent" },
				"& svg path": {
					fill: "#ccc",
				},
			},
			"&:hover": {
				"& fieldset": { borderColor: "transparent" },
			},
			"& fieldset": {
				borderColor: "transparent",
				borderWidth: 1,
			},
		},
		"& .MuiOutlinedInput-input": {
			padding: "12px 14px 14px 5px",
		},
	},
}))(TextField);
