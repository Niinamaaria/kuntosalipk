import styles from './startup.module.scss';
import Button from '../../shared/uibuttons';
import firebase from 'firebase/app';
import { useAuth } from 'reactfire';

function StartUp (props) {

    const auth = useAuth();

    const signIn = async () => {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    return (  
        <div className={styles.startup}>
            <h1>Kuntosalipäiväkirja</h1>
            <div>Tervetuloa käyttämään kuntosalipäiväkirjaa, johon voit kirjata omat kuntosalitreenisi ja seurata kehitystäsi.
                Sinun tulee kirjautua sisään Google-tunnuksillasi, jotta voit käyttää sovellusta. 
            </div>
            <Button onClick={signIn} primary dark>Kirjaudu sisään</Button>
        </div> 
    ); 
}

export default StartUp;