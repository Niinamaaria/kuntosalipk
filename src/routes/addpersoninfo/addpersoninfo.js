import styles from './addpersoninfo.module.scss';
import ItemFormPerson from '../../components/itemformperson';

function AddPersonInfo(props) {
    return  (
        <div className={styles.addpersoninfo}>
            <h3>Profiilitietojen lisääminen</h3>
            <ItemFormPerson onPersonSubmit={props.onPersonSubmit} />
        </div>
    );
}

export default AddPersonInfo;