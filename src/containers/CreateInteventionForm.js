import React from 'react';
//import { useSelector } from 'react-redux';
//import { createStore, combineReducers } from 'redux'
//import { reducer as formReducer } from 'redux-form';
//import { Field, reduxForm } from 'redux-form';



//const rootReducer = combineReducers({

 // form: formReducer
//})

// const { dispatch } = useDispatch();
//const store = createStore(rootReducer)

function CreateInteventionForm(props) {
    
    const { handleSubmit } = props;

    //onSubmit (formValues) => {
        //dispatch(addIntervention(formValues))
    //}

    return (
        <>
            <form onSubmit={handleSubmit}>
                
                <div class="c-form_container">
                    <div class="buttons_form">
                    <button type="button" id="btn_back">Annuler</button>
                    <button class="c-button" type="submit">Créer</button>
                    </div>                    
                    <fieldset class="c-form">
                        <div class="c-form__row">
                        <label htmlFor="name">NOM DE L'INTERVENTION</label>
                            <input type="text" name="demand" id="demand" class="c-input-field" />
                        </div>
                        
                        <div class="c-form__row">
                            <label for="message" class="c-label">DESCRIPTION</label>
                            <textarea name="message" id="message" class="c-input-field c-input-field--multiline" rows="5" ></textarea>
                        </div>
                        <div class="c-form__row">
                            <label for="demand" class="c-label">DEMANDEUR</label>
                            <input type="text" name="demand" id="demand" class="c-input-field" />
                        </div>
                        <div class="c-form__row">
                            <label for="email" class="c-label">EMAIL</label>
                            <input type="email" name="email" id="email" autocapitalize="none" autocorrect="off" class="c-input-field" required />
                        </div>
                        <div class="c-form__row">
                            <label for="tel" class="c-label">TÉLÉPHONE</label>
                            <input type="tel" name="tel" id="tel" class="c-input-field" required />
                        </div>
                    </fieldset>
                </div>            
                
            </form>
            
        </>
    ); 
}

export default CreateInteventionForm;
