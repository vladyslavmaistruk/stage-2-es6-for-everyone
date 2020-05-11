import { callApi } from '../helpers/apiHelper';

class FighterService {
  async getFighters() {
    try {
      const endpoint = 'fighters.json';
      const apiResult = await callApi(endpoint, 'GET');

      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(id) {
    
    // todo: implement this method
    // endpoint - `details/fighter/${id}.json`;
    try {
      const endpointDetails = `details/fighter/${id}.json`;
      const apiResultDetails = await callApi(endpointDetails, 'GET');
      return apiResultDetails;
    } catch (error) {
      throw error;
    }
  }
}

export const fighterService = new FighterService();
