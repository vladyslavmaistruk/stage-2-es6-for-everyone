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
     console.log(`id = ${id}`);
    
    // todo: implement this method
    // endpoint - `details/fighter/${id}.json`;
    try {
      const endpointDetails = `details/fighter/${id}.json`;
      // console.log(endpointDetails);
      const apiResultDetails = await callApi(endpointDetails, 'GET');
      // console.log(`apiResultDetails = ${apiResultDetails}`);
      return apiResultDetails;
    } catch (error) {
      throw error;
    }
  }
}

export const fighterService = new FighterService();
