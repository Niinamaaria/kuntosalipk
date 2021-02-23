import { useState } from 'react';

const useFormPerson = (callback, initialState={}, resetOnSubmit=true) => {

    const [values, setValues] = useState(initialState);

    const handleSubmitPerson = (event ) => {
        if (event) {
            event.preventDefault();
        }
        callback();
        if (resetOnSubmit) resetValues();
    }

    const handleChangePerson = (event) => {
        event.persist();
        let value = event.target.value;
        setValues(values => ({...values, [event.target.name]: value}));
    }

    const resetValues = () => {
        setValues(initialState);
    }

    return {
        handleSubmitPerson,
        handleChangePerson,
        resetValues,
        setValues,
        values
    };
}

export default useFormPerson;