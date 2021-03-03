import React from "react";
import { Select, makeStyles, Theme, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const SelectBox = withStyles((theme: Theme) => ({
	root: {
		borderRadius: 17,
		backgroundColor: "#fff",
		paddingLeft: 15,
		paddingRight: 15,
		fontSize: 12,
		fontWeight: "bold",
		padding: "12px 14px 12px 5px",
		minWidth: 150,
		border: "none",
		"&.MuiInputBase-formControl": {
			borderWidth: 1, borderColor: "transparent"
		},
		"& fieldset": { borderWidth: 1, borderColor: "transparent" },
		"&.Mui-focused": {
			backgroundColor: "#fff",
			"& fieldset": { borderWidth: 1, borderColor: "transparent" },
			"& svg path": {
				fill: "#ccc",
			},
		},
	},
}))(Select);

export default SelectBox;
