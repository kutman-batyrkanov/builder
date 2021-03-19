import { useState } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";
import Darwer from "../Drawer/Drawer";


const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
  return (
      <div className={classes.Layout}>
          <Toolbar openDrawer={() => setDrawerOpen(true)} />
          <Darwer open={drawerOpen} closeDrawer={() => setDrawerOpen(false)} />
      {children}
      </div>);
}

export default Layout;
