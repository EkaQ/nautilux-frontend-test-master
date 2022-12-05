import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { sortBy } from 'lodash';
import { getInterventionsRequested , orderByDate } from '../actions';
import { format, parseJSON } from "date-fns";

const formatFullDate = (date) => {
  return format(parseJSON(date), 'dd/MM/yyyy HH:mm:ss');
}
const formatDay = (date) => {
  return format(parseJSON(date), 'dd');
}
const formatMonth = (date) => {
  return format(parseJSON(date), 'MMM');
}

function InterventionsList() {
  const dispatch = useDispatch();
  const { list: interventions, status } = useSelector(state => state.interventions);

  const orderByDateClick = () => {
    dispatch(orderByDate())
    const interventionsOrdered = sortBy(interventions, ['created_at']);
  }

  React.useEffect(() => { 
    if (status === 'idle') {
      dispatch(getInterventionsRequested())
    }
  }, [dispatch]);

  const goToIntervention = (id) => { console.log('testgoToIntervention()'); }

  return (
    <>
    <div id="wrapper_new_intervention"> 
      <button type="button" id="btn_new_intervention">Créer une intervention</button>
      <div id="interventions_count">{Object.keys(interventions).length} interventions</div>
    </div>
    <div id="table">
      <div id="header_table">
        <div class="header_table_elem table_elem_date"><button class="header_table_elem header_table_elem_button" type="button" onClick={orderByDateClick}>DATE</button></div>
        <div class="header_table_elem table_elem_name">NOM</div>
        <div class="header_table_elem table_elem_description">DESCRIPTION</div>
        <div class="header_table_elem table_elem_sender">DEMANDEUR</div>
        <div class="header_table_elem table_elem_senderinfos">COORDONNÉES</div>
      </div>

      <div id="main_table">
        <ul>
          {interventions.map((intervention)=>
            <li key={intervention.id}>
            <Link to={`/InterventionDetails/${intervention.id}`} class="intervention_line">
              <span class="table_elem table_elem_date"><div class="date_flat"><div class="date_flat_number">{formatDay(intervention.created_at)}</div><div class="date_flat_text">{formatMonth(intervention.created_at)}</div></div></span>
              <span class="table_elem table_elem_name">{intervention.name}<div class="table_elem_date">{formatFullDate(intervention.created_at)}</div></span>
              <span class="table_elem table_elem_description">{intervention.description}</span>
              <span class="table_elem table_elem_sender">{intervention.sender_name}</span>
              <span class="table_elem table_elem_senderinfos">{intervention.sender_email}<div>{intervention.sender_phone}</div></span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
    </>
  );
  
}

export default InterventionsList;
