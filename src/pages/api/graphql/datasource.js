import { RESTDataSource } from 'apollo-datasource-rest';
import { camelCased } from '../../../helpers';

export class SuperHeroAPI extends RESTDataSource {
  api = `https://superheroapi.com/api/${process.env.ACCESS_TOKEN}`;

  async getCharacterAPI(id) {
    const result = await this.get(`${this.api}/${id}`, null, {
      cacheOptions: { ttl: 60 * 60 * 24 * 90 }
    });

    const treatDataJSON = await camelCased(JSON.stringify(result));

    return JSON.parse(treatDataJSON);
  }
}
