import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from '@material-ui/core';

import ListItemLink from '../ListItemLink';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from './AccountButton';
import DiscordImage from '../../assets/img/discord.svg';
import logo4 from '../../assets/img/sno.png';
import logohshare2 from '../../assets/img/snoshare.png';
import useTombStats from '../../hooks/useTombStats';
import usetShareStats from '../../hooks/usetShareStats';

const logo = require('../../assets/img/notsnowy_128.png');
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  logo: {
    width: "75px",
    marginRight: "20px"
  },
  label: {
    fontSize: "22px",
    marginRight: "50px"
  },
  appBar: {
    color: '#e0e3bd',
    'background-color': 'transparent',
    // borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '30px',
    marginBottom: '3rem',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'nowrap',
  },
  toolbarTitle: {
    fontFamily: '"Quicksand", cursive',
    fontSize: '30px',
  },
  link: {
    fontFamily: '"Quicksand", cursive',
    color: '#161D29',
    fontSize: '18px',
    margin: '5%',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  brandLink: {
    textDecoration: 'none',
    fontWeight: 400,
    color: 'black',
    textShadow: '2px 2px 4px #ff000066',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  "@media only screen and (max-width: 1600px)": {
    logo: {
      width: "60px",
      marginRight: "12px"
    },
    label: {
      fontSize: "18px",
      marginRight: "30px"
    },
    link: {
      fontSize: "17px",
      margin: "3.5%"
    }
  },
  black: {
    color: "#000000 !important"
  }
}));


const Nav = () => {
  const matches = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const tombStats = useTombStats();
  const tShareStats = usetShareStats();
  const tombPriceInDollars = useMemo(
    () => (tombStats ? Number(tombStats.priceInDollars).toFixed(2) : null),
    [tombStats],
  );
  const tSharePriceInDollars = useMemo(
    () => (tShareStats ? Number(tShareStats.priceInDollars).toFixed(2) : null),
    [tShareStats],
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar} style={{ width: "100%" }}>
        {matches ? (
          <>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            
              <Link to="/" color="inherit" className={classes.brandLink}>
                <div className={classes.label} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <img alt='logo' className={classes.logo} src={String(logo)} />
                  Not Snowy
                  </div>
              </Link>
            </Typography>
            <Box style={{ width: "auto !important" }}>
              <Link color="textPrimary" to="/" className={classes.link}>
                Home
              </Link>
              <Link color="textPrimary" to="/farms" className={classes.link}>
                Farms
              </Link>
              <Link color="textPrimary" to="/boardroom" className={classes.link}>
                Boardroom
              </Link>
              <Link color="textPrimary" to="/bonds" className={classes.link}>
                Bonds
              </Link>
              <Link color="textPrimary" to="/rebates" className={classes.link}>
                Rebates
              </Link>
              {/*<a href="https://yieldwolf.finance/avalanche/snowy-owl/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                Compound
              </a>*/}
              <a href="https://snowyowlfinance.gitbook.io/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                Docs
              </a>
              {/*<a href="https://arctic-fox.finance/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                ArcticFox
              </a>*/}
            </Box>
            <div style={{ width: "auto", marginLeft: "auto", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight: "20px" }}>
            {/*   <img style={{ width: 50 }} src={"/static/media/logo_notsnowy_native.png"} />
                  <span style={{ fontSize: '16px', color:'#000000', marginRight: '15px', marginLeft: '10px' }}>${tombPriceInDollars ? tombPriceInDollars	 : '-.--'}</span>
                  <img style={{ width: 50 }} src={"/static/media/logo_notsnowy_share.png"} />
                  <span style={{ fontSize: '16px', color:'#000000', marginRight: '30px', marginLeft: '10px' }}>${tSharePriceInDollars ? tSharePriceInDollars	 : '-.--'}</span> */}
            <Button href="https://discord.gg/5TbedQwN6j" target="_blank" variant="contained" color='secondary' style={{ marginRight: '25px', borderRadius: '14px', width: '60px' }}>
            <img alt='discordlogo' style={{ width: 22 }} src={String(DiscordImage)} />
              </Button>
            <AccountButton text="Connect"/>
            </div>
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Not Snowy Finance
            </Typography>

            <Drawer
              className={classes.drawer}
              onEscapeKeyDown={handleDrawerClose}
              onBackdropClick={handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
              <Link color="textPrimary" to="/" className={classes.link}>
                <div style={{ margin: "4px 20px" }}>Home</div>
              </Link>
              <Link color="textPrimary" to="/farms" className={classes.link}>
                <div style={{ margin: "4px 20px" }}>Farms</div>
              </Link>
              <Link color="textPrimary" to="/boardroom" className={classes.link}>
                <div style={{ margin: "4px 20px" }}>Boardroom</div>
              </Link>
              <Link color="textPrimary" to="/bonds" className={classes.link}>
                <div style={{ margin: "4px 20px" }}>Bonds</div>
              </Link>
              <Link color="textPrimary" to="/rebates" className={classes.link}>
                <div style={{ margin: "4px 20px" }}>Rebates</div>
              </Link>
              <a href="https://snowyowlfinance.gitbook.io/" target="_blank" className={classes.link}>
                <div style={{ margin: "4px 20px" }}>Docs</div>
              </a>
                <a href="https://arctic-fox.finance" target="_blank" className={classes.link}>
                <div style={{ margin: "4px 20px" }}>ArcticFox</div>
              </a>
                <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccountButton text="Connect" />
                </ListItem>
              </div>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
