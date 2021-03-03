import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AddIcon from '@material-ui/icons/Add';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PieChartIcon from "@material-ui/icons/PieChart";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import FolderIcon from "@material-ui/icons/Folder";
import { Grid, Container, FormControl, FormGroup, InputAdornment, MenuItem, Typography, Fab, Chip, Divider, Avatar } from "@material-ui/core";
import { SearchTextField } from "../components/Input/SearchTextField";
import SelectBox from "../components/Input/SelectBox";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
			backgroundColor: "#edf0ff",
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			marginRight: 36,
		},
		hide: {
			display: "none",
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
			whiteSpace: "nowrap",
		},
		drawerOpen: {
			width: drawerWidth,
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		drawerClose: {
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			overflowX: "hidden",
			width: theme.spacing(7) + 1,
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(12) + 1,
			},
		},
		toolbar: {
			display: "flex",
			alignItems: "center",
			justifyContent: "flex-end",
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
		mainContent: {
			marginTop: theme.spacing(2),
			height: "100%",
		},
		listWrapper: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",

			"& .MuiButtonBase-root": {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",

				"& .MuiListItemIcon-root": {
					minWidth: 0,
				},

				"& .MuiTypography-root": {
					fontSize: 12,
					fontWeight: "bold",
				},
			},
		},
		activeMenuItem: {
			borderRight: "2px solid #084ee4",
			color: "#084ee4",
			fill: "#084ee4",
			"& .MuiButtonBase-root": {
				"& .MuiListItemIcon-root": {
					minWidth: 0,
					"& .MuiSvgIcon-root": {},
				},
				"& .MuiTypography-root": {
					fontSize: 12,
					color: "#084ee4",
				},
			},
		},
		drawerButton: {
			marginBottom: 50,
		},
		drawerIcon: {
			fontSize: 48,
		},
		selectBox: {
			border: "none",
			"& .MuiOutlinedInput-root": {
				border: "none",
			},
			"& .MuiSelect-root": {
				border: "none",
				borderRadius: 20,
			},
			"& fieldset": {
				border: "none",
			},
		},
		searchTextField: {
			marginRight: 10,
		},
		topHeader: {
			display: "flex",
			justifyContent: "space-between",
		},
		tasksWrapper: {
			display: "flex",
			justifyContent: "space-between",
			width: "100%",
			marginTop: 30,
		},
		titleWrapper: {
			padding: "20px 0",
		},
		subtitle: {
			color: "#989ca8",
		},
		taskRow: {
			padding: "15px 10px 10px",
			borderRadius: "15px",
			display: "flex",
			alignItems: "center",
			flexDirection: "column",
			backgroundColor: "#dce1f5",
			width: "100%",

			"&:not(:last-child)": {
				marginRight: 10,
			},
		},
		taskHeader: {
			display: "flex",
			justifyContent: "space-between",
			width: "100%",
			marginBottom: "15px",
		},
		taskContent: {
			backgroundColor: "#fff",
			borderRadius: "15px",
			marginBottom: 10,
			"&:last-child": {
				marginBottom: 0,
			}
		},
		taskContentHead: {
			display: "flex",
			justifyContent: "space-between",
			padding: "20px 20px 0",
		},
		taskContentHeadText: {
			color: "#5a5e71",
			fontSize: "12px",
			fontWeight: "bold",
		},
		taskContentHorizIcon: {
			cursor: "pointer",
		},
		taskContentText: {
			padding: "0 20px",
			"& p": {
				color: "#9f9ea3",
				fontSize: "12px",
			}
		},
		taskContentTags: {
			display: "flex",
			padding: "0 20px 20px",
			"& .MuiChip-root": {
				marginRight: "10px",
			}
		},
		taskContentFooter: {
			display: "flex",
			justifyContent: "space-between",
			padding: "20px",
		},
		taskCount: {
			width: "40px",
			height: "40px",
			borderRadius: "50%",
			backgroundColor: "#0352eb",
			color: "#fff",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			marginLeft: "15px",
		},
		taskHeaderTitle: {
			color: "#3e4154",
			fontWeight: "bold",
			display: "flex",
			alignItems: "center",
		},
		taskContentTextTitle: {
			color: "#3a3a44",
			fontWeight: "bold",
		},
		taskAddButton: {
			backgroundColor: "#c3c5da",
			color: "#4b4e61", 
		},
		taskContentAvatar: {
			display: "flex",
			"& div": {
				marginRight: 10,
			}
		},
		taskContentComment: {
			display: "flex",
			alignItems: "center",

			"& span": {
				fontSize: 16,
				fontWeight: "bold",
			},
		}
	})
);

const Dashboard = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item xs={2}>
						<Drawer variant="permanent">
							<List className={classes.listWrapper}>
								<ListItem button className={classes.drawerButton}>
									<ListItemIcon>
										<FolderIcon className={classes.drawerIcon} color="primary" />
									</ListItemIcon>
								</ListItem>

								<ListItem button className={classes.activeMenuItem}>
									<ListItemIcon>
										<DashboardIcon color="primary" />
									</ListItemIcon>
									<ListItemText>Dashboard</ListItemText>
								</ListItem>
								<ListItem button>
									<ListItemIcon>
										<ListAltIcon />
									</ListItemIcon>
									<ListItemText>Backlog</ListItemText>
								</ListItem>
								<ListItem button>
									<ListItemIcon>
										<PieChartIcon />
									</ListItemIcon>
									<ListItemText>Activity</ListItemText>
								</ListItem>
								<ListItem button>
									<ListItemIcon>
										<InboxIcon />
									</ListItemIcon>
									<ListItemText>Inbox</ListItemText>
								</ListItem>
								<ListItem button>
									<ListItemIcon>
										<HelpIcon />
									</ListItemIcon>
									<ListItemText>Support Team</ListItemText>
								</ListItem>
								<ListItem button>
									<ListItemIcon>
										<SettingsIcon />
									</ListItemIcon>
									<ListItemText>Settings</ListItemText>
								</ListItem>
							</List>
						</Drawer>
					</Grid>
					<Grid item xs={12} className={classes.mainContent}>
						<FormControl component="fieldset" fullWidth>
							<FormGroup aria-label="position" row className={classes.topHeader}>
								<div>
									<SearchTextField
										variant="outlined"
										placeholder="Start typing to search"
										className={classes.searchTextField}
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<SearchIcon style={{ fill: "#ccc" }} />
												</InputAdornment>
											),
										}}
									/>
									<SelectBox
										className={classes.selectBox}
										variant="outlined"
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={0}
										onChange={() => {}}
									>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</SelectBox>
								</div>
								<div>
									<SelectBox
										className={classes.selectBox}
										variant="outlined"
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={1}
										onChange={() => {}}
									>
										<MenuItem value={10}>
											<Avatar alt="Remy Sharp" src="https://habrastorage.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg" /> Ten
										</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</SelectBox>
								</div>
							</FormGroup>
						</FormControl>
						<div className={classes.titleWrapper}></div>
						<Typography variant="h4" component="h4">
							September Street
						</Typography>
						<Typography variant="subtitle1" className={classes.subtitle}>
							1.03.2021 - 4.03.2021
						</Typography>
						<div className={classes.tasksWrapper}>
							<div className={classes.taskRow}>
								<div className={classes.taskHeader}>
									<div className={classes.taskHeaderTitle}>Tasks
										<div className={classes.taskCount}>14</div>
									</div>
									<Fab className={classes.taskAddButton} size="small">
										<AddIcon />
									</Fab>
								</div>
								<div>
									<div className={classes.taskContent}>
										<div className={classes.taskContentHead}>
											<div className={classes.taskContentHeadText}>D-87</div>
											<div className={classes.taskContentHorizIcon}><MoreHorizIcon /></div>
										</div>
										<div className={classes.taskContentText}>
											<div className={classes.taskContentTextTitle}>Lorem ipsum dolor sit settings adipisicing elit.</div>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
												Ratione unde iure itaque minima numquam doloremque.
											</p>
										</div>
										<div className={classes.taskContentTags}>
											<Chip label="Mass Product" clickable color="primary"/>
											<Chip label="Major" clickable color="secondary"/>
										</div>
										<Divider />
										<div className={classes.taskContentFooter}>
											<div className={classes.taskContentAvatar}>
												<Avatar alt="Remy Sharp" src="https://habrastorage.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg" />
												<Avatar alt="Travis Howard" src="https://peopletalk.ru/wp-content/uploads/2020/10/96936606_533774427287598_8568557999742539945_n-640x510.jpg" />
											</div>
											<div className={classes.taskContentComment}><AttachFileIcon /> <span>2</span></div>
										</div>
									</div>
									<div className={classes.taskContent}>
										<div className={classes.taskContentHead}>
											<div className={classes.taskContentHeadText}>D-87</div>
											<div className={classes.taskContentHorizIcon}><MoreHorizIcon /></div>
										</div>
										<div className={classes.taskContentText}>
											<div className={classes.taskContentTextTitle}>Lorem ipsum dolor sit settings adipisicing elit.</div>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
												Ratione unde iure itaque minima numquam doloremque.
											</p>
										</div>
										<div className={classes.taskContentTags}>
											<Chip label="Mass Product" clickable color="primary"/>
											<Chip label="Major" clickable color="secondary"/>
										</div>
										<Divider />
										<div className={classes.taskContentFooter}>
											<div className={classes.taskContentAvatar}>
												<Avatar alt="Remy Sharp" src="https://habrastorage.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg" />
												<Avatar alt="Travis Howard" src="https://peopletalk.ru/wp-content/uploads/2020/10/96936606_533774427287598_8568557999742539945_n-640x510.jpg" />
											</div>
											<div className={classes.taskContentComment}><AttachFileIcon /> <span>2</span></div>
										</div>
									</div>
									<div className={classes.taskContent}>
										<div className={classes.taskContentHead}>
											<div className={classes.taskContentHeadText}>D-87</div>
											<div className={classes.taskContentHorizIcon}><MoreHorizIcon /></div>
										</div>
										<div className={classes.taskContentText}>
											<div className={classes.taskContentTextTitle}>Lorem ipsum dolor sit settings.</div>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
											</p>
										</div>
										<div className={classes.taskContentTags}>
											<Chip label="Mass Product" clickable color="primary"/>
											<Chip label="Major" clickable color="secondary"/>
										</div>
										<Divider />
										<div className={classes.taskContentFooter}>
											<div className={classes.taskContentAvatar}>
												<Avatar alt="Remy Sharp" src="https://habrastorage.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg" />
												<Avatar alt="Travis Howard" src="https://peopletalk.ru/wp-content/uploads/2020/10/96936606_533774427287598_8568557999742539945_n-640x510.jpg" />
											</div>
											<div className={classes.taskContentComment}><AttachFileIcon /> <span>2</span></div>
										</div>
									</div>
								</div>
							</div>

							<div className={classes.taskRow}>
								<div className={classes.taskHeader}>
									<div className={classes.taskHeaderTitle}>In progress
										<div className={classes.taskCount}>17</div>
									</div>
									<Fab className={classes.taskAddButton} size="small">
										<AddIcon />
									</Fab>
								</div>
								<div>
									<div className={classes.taskContent}>
										<div className={classes.taskContentHead}>
											<div className={classes.taskContentHeadText}>D-87</div>
											<div className={classes.taskContentHorizIcon}><MoreHorizIcon /></div>
										</div>
										<div className={classes.taskContentText}>
											<div className={classes.taskContentTextTitle}>Lorem ipsum dolor sit settings.</div>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
											</p>
										</div>
										<div className={classes.taskContentTags}>
											<Chip label="Mass Product" clickable color="primary"/>
											<Chip label="Major" clickable color="secondary"/>
										</div>
										<Divider />
										<div className={classes.taskContentFooter}>
											<div className={classes.taskContentAvatar}>
												<Avatar alt="Remy Sharp" src="https://habrastorage.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg" />
												<Avatar alt="Travis Howard" src="https://peopletalk.ru/wp-content/uploads/2020/10/96936606_533774427287598_8568557999742539945_n-640x510.jpg" />
											</div>
											<div className={classes.taskContentComment}><AttachFileIcon /> <span>2</span></div>
										</div>
									</div>
									<div className={classes.taskContent}>
										<div className={classes.taskContentHead}>
											<div className={classes.taskContentHeadText}>D-87</div>
											<div className={classes.taskContentHorizIcon}><MoreHorizIcon /></div>
										</div>
										<div className={classes.taskContentText}>
											<div className={classes.taskContentTextTitle}>Lorem ipsum dolor sit settings adipisicing elit.</div>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit.
												dolor sit amet consectetur adipisicing elit.
												Ratione unde iure itaque minima numquam doloremque.
											</p>
										</div>
										<div className={classes.taskContentTags}>
											<Chip label="Mass Product" clickable color="primary"/>
											<Chip label="Major" clickable color="secondary"/>
										</div>
										<Divider />
										<div className={classes.taskContentFooter}>
											<div className={classes.taskContentAvatar}>
												<Avatar alt="Remy Sharp" src="https://habrastorage.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg" />
												<Avatar alt="Travis Howard" src="https://peopletalk.ru/wp-content/uploads/2020/10/96936606_533774427287598_8568557999742539945_n-640x510.jpg" />
											</div>
											<div className={classes.taskContentComment}><AttachFileIcon /> <span>2</span></div>
										</div>
									</div>
								</div>
							</div>

							<div className={classes.taskRow}>
								<div className={classes.taskHeader}>
									<div className={classes.taskHeaderTitle}>Review
										<div className={classes.taskCount}>8</div>
									</div>
									<Fab className={classes.taskAddButton} size="small">
										<AddIcon />
									</Fab>
								</div>
								<div>
									<div className={classes.taskContent}>
										<div className={classes.taskContentHead}>
											<div className={classes.taskContentHeadText}>D-87</div>
											<div className={classes.taskContentHorizIcon}><MoreHorizIcon /></div>
										</div>
										<div className={classes.taskContentText}>
											<div className={classes.taskContentTextTitle}>Lorem ipsum dolor sit settings adipisicing elit.</div>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
												Ratione unde iure itaque minima numquam doloremque.
											</p>
										</div>
										<div className={classes.taskContentTags}>
											<Chip label="Mass Product" clickable color="primary"/>
											<Chip label="Major" clickable color="secondary"/>
										</div>
										<Divider />
										<div className={classes.taskContentFooter}>
											<div className={classes.taskContentAvatar}>
												<Avatar alt="Remy Sharp" src="https://habrastorage.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg" />
												<Avatar alt="Travis Howard" src="https://peopletalk.ru/wp-content/uploads/2020/10/96936606_533774427287598_8568557999742539945_n-640x510.jpg" />
											</div>
											<div className={classes.taskContentComment}><AttachFileIcon /> <span>2</span></div>
										</div>
									</div>
									<div className={classes.taskContent}>
										<div className={classes.taskContentHead}>
											<div className={classes.taskContentHeadText}>D-87</div>
											<div className={classes.taskContentHorizIcon}><MoreHorizIcon /></div>
										</div>
										<div className={classes.taskContentText}>
											<div className={classes.taskContentTextTitle}>Lorem ipsum dolor sit settings adipisicing elit.</div>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
												Ratione unde iure itaque minima numquam doloremque.
											</p>
										</div>
										<div className={classes.taskContentTags}>
											<Chip label="Mass Product" clickable color="primary"/>
											<Chip label="Major" clickable color="secondary"/>
										</div>
										<Divider />
										<div className={classes.taskContentFooter}>
											<div className={classes.taskContentAvatar}>
												<Avatar alt="Remy Sharp" src="https://habrastorage.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg" />
												<Avatar alt="Travis Howard" src="https://peopletalk.ru/wp-content/uploads/2020/10/96936606_533774427287598_8568557999742539945_n-640x510.jpg" />
											</div>
											<div className={classes.taskContentComment}><AttachFileIcon /> <span>2</span></div>
										</div>
									</div>
									<div className={classes.taskContent}>
										<div className={classes.taskContentHead}>
											<div className={classes.taskContentHeadText}>D-87</div>
											<div className={classes.taskContentHorizIcon}><MoreHorizIcon /></div>
										</div>
										<div className={classes.taskContentText}>
											<div className={classes.taskContentTextTitle}>Lorem ipsum dolor sit settings.</div>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
											</p>
										</div>
										<div className={classes.taskContentTags}>
											<Chip label="Mass Product" clickable color="primary"/>
											<Chip label="Major" clickable color="secondary"/>
										</div>
										<Divider />
										<div className={classes.taskContentFooter}>
											<div className={classes.taskContentAvatar}>
												<Avatar alt="Remy Sharp" src="https://habrastorage.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg" />
												<Avatar alt="Travis Howard" src="https://peopletalk.ru/wp-content/uploads/2020/10/96936606_533774427287598_8568557999742539945_n-640x510.jpg" />
											</div>
											<div className={classes.taskContentComment}><AttachFileIcon /> <span>2</span></div>
										</div>
									</div>
								</div>
							</div>

							<div className={classes.taskRow}>
								<div className={classes.taskHeader}>
									<div className={classes.taskHeaderTitle}>Approved
										<div className={classes.taskCount}>32</div>
									</div>
									<Fab className={classes.taskAddButton} size="small">
										<AddIcon />
									</Fab>
								</div>
								<div>
									<div className={classes.taskContent}>
										<div className={classes.taskContentHead}>
											<div className={classes.taskContentHeadText}>D-87</div>
											<div className={classes.taskContentHorizIcon}><MoreHorizIcon /></div>
										</div>
										<div className={classes.taskContentText}>
											<div className={classes.taskContentTextTitle}>Lorem ipsum dolor sit settings adipisicing elit.</div>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
											</p>
										</div>
										<div className={classes.taskContentTags}>
											<Chip label="Mass Product" clickable color="primary"/>
											<Chip label="Major" clickable color="secondary"/>
										</div>
										<Divider />
										<div className={classes.taskContentFooter}>
											<div className={classes.taskContentAvatar}>
												<Avatar alt="Remy Sharp" src="https://habrastorage.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg" />
												<Avatar alt="Travis Howard" src="https://peopletalk.ru/wp-content/uploads/2020/10/96936606_533774427287598_8568557999742539945_n-640x510.jpg" />
											</div>
											<div className={classes.taskContentComment}><AttachFileIcon /> <span>2</span></div>
										</div>
									</div>
									<div className={classes.taskContent}>
										<div className={classes.taskContentHead}>
											<div className={classes.taskContentHeadText}>D-87</div>
											<div className={classes.taskContentHorizIcon}><MoreHorizIcon /></div>
										</div>
										<div className={classes.taskContentText}>
											<div className={classes.taskContentTextTitle}>Lorem ipsum dolor sit settings adipisicing elit.</div>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
												Ratione unde iure itaque minima numquam doloremque.
											</p>
										</div>
										<div className={classes.taskContentTags}>
											<Chip label="Mass Product" clickable color="primary"/>
											<Chip label="Major" clickable color="secondary"/>
										</div>
										<Divider />
										<div className={classes.taskContentFooter}>
											<div className={classes.taskContentAvatar}>
												<Avatar alt="Remy Sharp" src="https://habrastorage.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg" />
												<Avatar alt="Travis Howard" src="https://peopletalk.ru/wp-content/uploads/2020/10/96936606_533774427287598_8568557999742539945_n-640x510.jpg" />
											</div>
											<div className={classes.taskContentComment}><AttachFileIcon /> <span>2</span></div>
										</div>
									</div>
									<div className={classes.taskContent}>
										<div className={classes.taskContentHead}>
											<div className={classes.taskContentHeadText}>D-87</div>
											<div className={classes.taskContentHorizIcon}><MoreHorizIcon /></div>
										</div>
										<div className={classes.taskContentText}>
											<div className={classes.taskContentTextTitle}>Lorem ipsum dolor sit settings.</div>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
											</p>
										</div>
										<div className={classes.taskContentTags}>
											<Chip label="Mass Product" clickable color="primary"/>
											<Chip label="Major" clickable color="secondary"/>
										</div>
										<Divider />
										<div className={classes.taskContentFooter}>
											<div className={classes.taskContentAvatar}>
												<Avatar alt="Remy Sharp" src="https://habrastorage.org/getpro/geektimes/post_images/16f/9e0/9b5/16f9e09b5b79546cf30d6f73497c82fc.jpg" />
												<Avatar alt="Travis Howard" src="https://peopletalk.ru/wp-content/uploads/2020/10/96936606_533774427287598_8568557999742539945_n-640x510.jpg" />
											</div>
											<div className={classes.taskContentComment}><AttachFileIcon /> <span>2</span></div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Dashboard;
