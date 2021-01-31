import { Link } from 'react-router-dom';
import styles from './menu.module.scss';
import ViewListIcon from '@material-ui/icons/ViewList';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function Menu() {
    return (
        <div className={styles.menu}>
            <div><Link to="/"><ViewListIcon /></Link></div>
            <div><Link to="/settings"><SettingsIcon /></Link></div>
            <div><Link to="/person"><PersonIcon /></Link></div>
            <div><Link to="/stats"><TrendingUpIcon /></Link></div>
        </div>
    );
}

export default Menu;