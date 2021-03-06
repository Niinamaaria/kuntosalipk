import styles from './itemformperson.module.scss';
import useFormPerson from '../../shared/useformperson';
import Button from '../../shared/uibuttons';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function ItemFormPerson(props) {

    const history = useHistory();

    const submit = () => {
        let storedvaluesperson = Object.assign({}, values);
        storedvaluesperson.id = storedvaluesperson.id ? storedvaluesperson.id : uuidv4();
        props.onPersonSubmit(storedvaluesperson);
        history.push("/person");
    }

    const initialState = {
        name:"",
        age:"",
        height:"",
        weight:""
    };

    const {values, handleChangePerson, handleSubmitPerson} = useFormPerson(submit, initialState, false);

    const handleCancelPerson = (event) => {
        event.preventDefault();
        history.goBack();
    }

    return (
        <div>
            <div className={styles.profile}>
                <form id={"person"} onSubmit={handleSubmitPerson}>
                    <div className={styles.person_form}>
                            <label htmlFor="name">Nimi: </label>
                            <input type="text" name="name" onChange={handleChangePerson} value={values.name}></input>
                            </div>
                    <div>    
                            <label htmlFor="age">Ikä: </label>
                            <input type="text" name="age" onChange={handleChangePerson} value={values.age}></input>
                            </div>
                    <div>
                            <label htmlFor="height">Pituus: </label>
                            <input type="text" name="height" onChange={handleChangePerson} value={values.height}></input>
                            </div>
                    <div>
                            <label htmlFor="weight">Paino: </label>
                            <input type="text" name="weight" onChange={handleChangePerson} value={values.weight}></input>                        
                    </div>

                    <div className={styles.person_form}>
                        <div>
                            <Button primary type="submit">TALLENNA</Button>
                        </div>
                        <div>
                        <Button success onClick={handleCancelPerson}>PERUUTA</Button>
                        </div>

                    </div>
                </form>

            </div>

        </div>
    );
}

export default ItemFormPerson;