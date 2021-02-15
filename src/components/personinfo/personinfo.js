import styles from './personinfo.module.scss';
import niina from '../../shared/niina.jpeg';

function PersonInfo(props) {
    return (
        <div className={styles.person}>
            <h3>Oma profiili</h3>
            <img src={niina}/>
            <div className={styles.person_data}>
                <div className={styles.person_name}>{props.data.name}</div>
                <div className={styles.person_age}>{props.data.age}</div>
                <div className={styles.person_height}>{props.data.height}</div>
                <div className={styles.person_weight}>{props.data.weight}</div>
            </div>
        </div>
    );
}

export default PersonInfo;