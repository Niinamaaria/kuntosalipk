import styles from './item.module.scss';

function Item(props) {
    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_type}>Syväkyykky</div>
                <div className={styles.item_repeats}>3 x 15</div>
                <div className={styles.item_date}>30.1.2021</div>
                <div className={styles.item_kg}>50 kg</div>
            </div>
        </div>
    );
}

export default Item;