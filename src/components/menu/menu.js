import styles from './menu.module.scss';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewListIcon from '@material-ui/icons/ViewList';
import PersonIcon from '@material-ui/icons/Person';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function Menu() {
    return (
        <div className={styles.menu}>
            <div><SettingsIcon /></div>
            <div><ViewListIcon /></div>
            <div><PersonIcon /></div>
            <div><TrendingUpIcon /></div>
        </div>
    );
}

export default Menu;