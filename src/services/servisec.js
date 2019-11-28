export default class SwapiService {
  _apiBase = "https://swapi.co/api";
  _imgBase = "https://starwars-visualguide.com/assets/img/"

  _peopleImg = `${this._imgBase}characters/`
  _planetImg = `${this._imgBase}planets/`
  _starShipImg = `${this._imgBase}starship/`
  
  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} recived status ${res.status}`);
    }
    const body = await res.json();
    return body;
  };
  getAllPioples = async page => {
    const res = await this.getResource(`/people/?page=${page}`);
    return {
      nextPage: res.next,
      prevPage: res.previous,
      itemList: res.results ///fix it
    };
  };
  getPerson = async id => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };
  _transformPerson = person => {
    return {
      img:`${this._peopleImg}`,
      birthYear: person.birth_year,
      name: person.name,
      gender: person.gender,
      eyeColor: person.eye_color,
      id: this._extractId(person)
    };
  };
  getAllStarShips = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results;
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
  getAllPlanets = async page => {
    const res = await this.getResource(`/planets/?page=${page}`);
    return {
      nextPage: res.next,
      prevPage: res.previous,
      itemList: res.results
    };
  };
  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };
  _transformPlanet = planet => {
    return {
      img:`${this._planetImg}`,
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotatePeriod: planet.rotation_period,
      diameter: planet.diameter,
      climate:planet.climate,
    };
  };
}
