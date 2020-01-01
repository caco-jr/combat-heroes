import { RESTDataSource } from 'apollo-datasource-rest';

export class SuperHeroAPI extends RESTDataSource {
  _accessToken = '2542540742509147';
  api = `https://superheroapi.com/api/${this._accessToken}`;

  async getCharacterAPI(id) {
    return this.get(`${this.api}/${id}`, null, {
      cacheOptions: { ttl: 60 * 60 * 24 * 90 }
    });
  }
}
