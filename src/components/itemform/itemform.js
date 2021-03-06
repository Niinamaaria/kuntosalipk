import styles from './itemform.module.scss';
import useForm from '../../shared/useform';
import Button from '../../shared/uibuttons';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function ItemForm(props) {

    const history = useHistory();

    const submit = () => {
        let storedvalues = Object.assign({}, values);
        storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
        props.onItemSubmit(storedvalues); 
        history.push("/");
    }

    const initialState = props.data ? props.data : {
        type: props.types ? props.types[0] : "",
        repeats: "",
        trainDate: new Date().toISOString().substring(0, 10),
        kilos: ""
    };

    const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

    const handleCancel = (event) => {
        event.preventDefault();
        history.goBack();
    }

    const handleDelete = (event) => {
        event.preventDefault();
        props.onItemDelete(values.id);
        history.push("/");
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <div className={styles.form}>
                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="type">Liike</label>
                        <select name="type" onChange={handleChange} value={values.type} required>
                           {props.types.map( (type) =>  <option  key={type} value={type}>{type}</option> ) }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="repeats">Toistot</label>
                        <input type="text" name="repeats" onChange={handleChange} value={values.repeats} required/>
                    </div>
                </div>
                <div className={styles.form_row}>
                    <div>
                        <label htmlFor="trainDate">Päivämäärä</label>
                        <input type="date" name="trainDate" onChange={handleChange} values={values.trainDate} required/>
                    </div>
                    <div>
                        <label htmlFor="kilos">Painot / Kg</label>
                        <input type="number" name="kilos" step="0.01" onChange={handleChange} values={values.kilos} required/>
                    </div> 
                </div>
            </div>
            
            <div className={styles.form_row}>
                     <div>
                        <Button primary type="submit">{props.data ? "TALLENNA" : "LISÄÄ"}</Button>
                   </div>
                    <div>
                        <Button success onClick={handleCancel}>PERUUTA</Button>
                   </div>
            {props.onItemDelete ?       
            <div className={styles.form_row}>
                    <div>
                        <Button info onClick={handleDelete}>POISTA</Button>
                    </div>  
                    <div></div> 
                    </div> : ""}
            </div> 
        </form>
      </div>
    );
}

export default ItemForm;