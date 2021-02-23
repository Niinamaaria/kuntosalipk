import { Link } from 'react-router-dom';
import PersonInfo from '../../components/personinfo';
import { FloatingButton, ButtonContainer } from '../../shared/uibuttons';

function Person(props) {

    const person = props.data.map((person) => <PersonInfo key={person.id} data={person} />);

    return (

    <ButtonContainer>
        <div> 
            {person}
            <Link to="/addinfo"><FloatingButton secondary>+</FloatingButton></Link>
        </div>
    </ButtonContainer>
    );
}

export default Person;