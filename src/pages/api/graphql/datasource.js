import { RESTDataSource } from 'apollo-datasource-rest';
import { camelCased } from '../../../helpers';

export class SuperHeroAPI extends RESTDataSource {
  _accessToken = '2542540742509147';
  api = `https://superheroapi.com/api/${this._accessToken}`;

  async getCharacterAPI(id) {
    const result = await this.get(`${this.api}/${id}`, null, {
      cacheOptions: { ttl: 60 * 60 * 24 * 90 }
    });

    const treatDataJSON = await camelCased(JSON.stringify(result));

    return JSON.parse(treatDataJSON);
  }
}
