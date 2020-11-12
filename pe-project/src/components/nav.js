import React from 'react'
import { AppBar } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CloseIcon from '@material-ui/icons/Close'
import logo from '../assets/logo.png'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	search: {
        position: 'absolute',
        right: '2vw',
        // justifySelf: 'flex-end',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: '1vw',
		width: '20vw',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
		// '@media (max-width: 600px)': {
		// 	width: '12ch',
		// },
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},

	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},

	navElements: {
		minWidth: '0px',
		margin: '0 2vw',
		fontSize: '1rem',
		'&:hover': {
			transform: 'scale(1.25)',
			transition: 'all 0.25s ease',
		},
	},

	mobileNavElements: {
		margin: '0vh auto',
		padding: '2vh 0px',
		'&:hover': {
			transform: 'scale(1.25)',
			transition: 'all 0.25s ease',
		},
	},

	hidden: {
		display: 'none',
	},
}))

function Nav(props) {
	const classes = useStyles()
	const screen_size_small = useMediaQuery('(max-width: 1159px)')
	const [clicked, setClicked] = React.useState(false)

	return (
		<div>
			<div className={classes.root}>
				<AppBar position='fixed' color='primary' id='nav'>
					<Toolbar>
						{screen_size_small && (
							<IconButton
								edge='start'
								className={classes.menuButton}
								color='inherit'
								aria-label='open drawer'
								onClick={() =>
									setClicked(prevClicked => !prevClicked)
								}
							>
								{clicked ? <CloseIcon /> : <MenuIcon />}
							</IconButton>
						)}
						<img src={logo} id='logo' alt='logo' />

						<div id='title'>Kazaa Sports</div>

						{screen_size_small || (
							<Tabs value={false}>
								<NavTabs classes={classes.navElements} />
							</Tabs>
						)}

							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<SearchIcon />
								</div>
								<InputBase
									placeholder='Search…'
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
									inputProps={{ 'aria-label': 'search' }}
									style={{ fontSize: '1.5vw' }}
								/>
							</div>
						
					</Toolbar>
				</AppBar>
			</div>
			{screen_size_small && <MobileNav clicked={clicked} />}
		</div>
	)
}

function NavTabs({ classes }) {
	return (
		<>
			<Tab label='Home' href='/' className={classes} />

			<Tab label='Videos' href='/' className={classes} />

			<Tab label='Articles' href='/' className={classes} />

			<Tab label='About' href='/' className={classes} />
		</>
	)
}

function MobileNav({ clicked }) {
	const classes = useStyles()

	return (
		<div id={clicked ? 'mobile-nav' : 'mobile-nav mobile-nav-unclicked'}>
			<Tabs orientation='vertical' value={false}>
				<NavTabs
					classes={
						clicked ? classes.mobileNavElements : classes.hidden
					}
				/>
			</Tabs>
		</div>
	)
}

export default Nav
