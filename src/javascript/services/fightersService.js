import { callApi } from '../helpers/apiHelper';

class FighterService {
  async getFighters() {
    try {
      const endpoint = 'fighters';
      const apiResult = await callApi(endpoint, 'GET');

      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(_id) {
    // todo: implement this method
    // endpoint `fighter/${_id}`
  }
}

export const fighterService = new FighterService();
