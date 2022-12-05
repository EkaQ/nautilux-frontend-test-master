
export const getInterventionById = (state, id) => {
    state => state.interventions.list.find((intervention)=> intervention.id.toString() === id)
    //console.log('state.interventions.list',state.interventions.list)
}
