import { useEffect, useMemo, useState } from 'react';
                                         //formvalidations is coming of RegisterPage component
export const useForm = (initialForm = {}  , formValidations = {}) => { //this arguments are objets 

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createrValidators();
    }, [formState]);
    //this recomendacion using one effect to minupulate elements frm the state
    
    
    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm]);

    
    

   const isFormValid = useMemo(() => { //this is a function tha return true or false depending condicion
            for (const formValues of Object.keys(formValidation)) {
                if(formValidation[formValues] !== null) return  false; //yes anything that be null return false
            }
            return true;
    },
        
        [formValidation])


    const onInputChange = ({ target }) => {  //this function is reading data from the forms inputs
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createrValidators = ()=>{
        const formCheckValues ={};
        for (const formField of Object.keys(formValidations)) { //here we print the values
            // console.log(formField);
            const [fn, errorMessage] = formValidations[formField];
            formCheckValues[`${ formField }Valid`] = fn(formState[formField]) ? null : errorMessage; //yes conditional is valid send null ,but  conditional is not valid send error message
        }

        setFormValidation(formCheckValues);
       // console.log(formCheckValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation, //send all a copy of the state
        isFormValid
    }
}