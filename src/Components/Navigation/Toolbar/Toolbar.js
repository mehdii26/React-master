import React from "react";
import classes from "./Toolbar.css"
import {IconKebab} from "../../assets";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked}/>
        LOGO
        <nav className={classes.DesktopOnly}>
        <NavigationItems/>
        </nav>
    </header>
);

export default toolbar