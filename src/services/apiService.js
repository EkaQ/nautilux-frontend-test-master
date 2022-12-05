import axios from "axios";

const getInterventions = () => {
    return axios.get('http://localhost:3001/interventions')
    .then((response)=>response.data);
}
export default {getInterventions};