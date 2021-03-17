import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";
import Darwer from "../Drawer/Drawer";


const Layout = ({ children }) => {
  return (
      <div className={classes.Layout}>
          <Toolbar />
          <Darwer />
      {children}
      </div>);
}

export default Layout;
