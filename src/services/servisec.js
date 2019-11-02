export default class SwapiService {
  _apiBase = "https://swapi.co/api";

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} recived status ${res.status}`);
    }
    const body = await res.json();
    return body;
  };
  getAllPioples = async () => {
    return await this.getResource(`/people/`);
  };
  getPerson = async id => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };
  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      population: person.population,
      rotatePeriod: person.rotation_period,
      diametr: person.diameter
    };
  };
  getAllStarShips = async () => {
    return await this.getResource(`/starships/`);
  };
  _extractId(item) {
    const idRegexp = /\/([0-9]*)\/$/;
    return item.url.match(idRegexp)[1];
  }
  getStarship = async id => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };
  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      population: starship.population,
      rotatePeriod: starship.rotation_period,
      diametr: starship.diameter
    };
  };
  getAllPlanets = async () => {
    return await this.getResource(`/planets/`);
  };
  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };
  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotatePeriod: planet.rotation_period,
      diametr: planet.diameter
    };
  };
}
