import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getInterventionsRequested } from '../actions';

function InterventionDetails() {
    const dispatch = useDispatch();
    const { id } = useParams()
    const { list: interventions, status } = useSelector(state => state.interventions);

    React.useEffect(() => { 
        if (status === 'idle') {
          dispatch(getInterventionsRequested())
        }
    }, [dispatch]);

    const intervention = interventions.find((intervention) => {
        console.log(intervention.id, id);
        return intervention.id == id;
    });

    return (
        <>
            <div id="wrapper_intervention_details"> 
                <button type="button" id="btn_back">Retour</button>
                <div class="container_details">
                    <div class="name_detail">name</div>
                    <div class="description_detail_title">DESCRIPTION</div>
                    <div class="description_detail">Le nid de poules sur la route des prés devient dangereux. Pourriez-vous intervenir pour le reboucher ?</div>
                    <div class="demandeur_detail_title">DEMANDEUR</div>
                    <div class="demandeur_detail">Romuald Gauthier</div>
                    <div class="coordonnees_detail">romualdgautier@gmail.com</div>
                    <div class="coordonnees_detail">06 71 82 19 29</div>
                </div>
            </div>
        </>
    ); 
}
export default InterventionDetails;
