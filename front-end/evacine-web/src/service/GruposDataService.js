import axios from 'axios';

const API_URL = 'http://localhost:8080/';

class GruposDataService{

  retriveAllGrupos(){
    return axios.get(`${API_URL}grupos-prioridade`);
  }
}

export default new GruposDataService();