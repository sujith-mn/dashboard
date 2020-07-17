import CustomDrawer from './custom-drawer/CustomDrawer';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

type StyleClasses = Record<
  | 'content'
  | 'toolbar'
  | 'root'
  | 'drawer'
  | 'appBar'
  | 'menuButton'
  | 'drawerPaper',
  string
>;

interface NavigationProps {
  classes: StyleClasses;
  drawerToggle: () => void;
  mobileOpen: boolean;
}

const Navigation = (props: NavigationProps): JSX.Element => {
  return (
    <nav className={props.classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'left'}
          open={props.mobileOpen}
          onClose={props.drawerToggle}
          classes={{
            paper: props.classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <CustomDrawer classes={props.classes}></CustomDrawer>
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="js">
        <Drawer
          classes={{
            paper: props.classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <CustomDrawer classes={props.classes}></CustomDrawer>
        </Drawer>
      </Hidden>
    </nav>
  );
};
export default Navigation;
