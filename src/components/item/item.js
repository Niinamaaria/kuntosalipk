import styles from './item.module.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';

function Item(props) {

    const locale ="fi-FI";
    const trainDate = new Date(props.data.trainDate).toLocaleDateString(locale);

    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_type}>{props.data.type}</div>
                <div className={styles.item_repeats}>{props.data.repeats}</div>
                <div className={styles.item_date}>{trainDate}</div>
                <div className={styles.item_kg}>{props.data.kilos}</div>
            </div>
            <div className={styles.item_edit}>
                <Link to={"/edit/"+props.data.id}><NavigateNextIcon /></Link>
            </div>
        </div>
    );
}

export default Item;