import styles from './personinfo.module.scss';
import niina from '../../shared/niina.jpeg';

function PersonInfo(props) {
    return (
        <div className={styles.person}>
            <h3>Oma profiili</h3>
            <img src={niina} alt="profile"/>
            <div className={styles.person_data}>
                <div className={styles.person_name}>Nimi: {props.data.name}</div>
                <div className={styles.person_age}> Ikä: {props.data.age}</div>
                <div className={styles.person_height}>Pituus/cm: {props.data.height}</div>
                <div className={styles.person_weight}>Paino/kg: {props.data.weight}</div>
            </div>
        </div>
    );
}

export default PersonInfo;