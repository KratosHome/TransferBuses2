import React from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import MenuIcon from '@material-ui/icons/Menu';

import { MAIN_ROUTE } from '../../utils/constants';
import { Sidebar, LanguageSelector } from '..';
import CurrenciesSelector from '../CurrenciesSelector/CurrenciesSelector';
import { useStyles } from '../../utils/useStyles';
import css from './Navbar.module.css';
import { setSidebarAction } from '../../redux/actions/app-actions';
import { NavLink } from 'react-router-dom';
import { logo, version } from "../../config/logo-config";
// import {useTranslation} from "react-i18next";

// const Navbar = ({ changeLanguage }) => {
const Navbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const logo = 'TransferBuses';
  // const logoText = ( (process.env.REACT_APP_BUILD_MODE === 'prod' ) ? 'TransferBuses' : 'TransferBuses -dev')
  console.log(( (process.env.REACT_APP_BUILD_MODE === 'prod' ) ? 'TransferBuses' : 'TransferBuses -dev'))
  console.log(typeof (process.env.REACT_APP_BUILD_MODE , "****************"))
  console.log(process.env.REACT_APP_BUILD_MODE , "****************")

  return (
    <AppBar position="fixed">
      {/*<Container maxWidth="lg" fixed >*/}
      {/*<Container maxWidth={'false !important'}>*/}
      {/*<Container className={classes.toolbarContainer}>*/}
      {/*<Container style={{maxWidth: '100% !important', width: '100% !important'}}>*/}
        <Toolbar className={classes.toolbar}>
          <NavLink className={css.logo} to={MAIN_ROUTE}>
            <div style={{}}>{logo}</div>
            <div style={{fontSize: "10px"}}>{version}</div>
          </NavLink>
          <nav className={`${classes.nav} ${css.option_block}`}>
            <LanguageSelector />
            <CurrenciesSelector />
            <IconButton
              onClick={() => dispatch(setSidebarAction(true))}
              edge="end"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
          </nav>
        </Toolbar>
      <Sidebar />
    </AppBar>
  );
};

export default Navbar;