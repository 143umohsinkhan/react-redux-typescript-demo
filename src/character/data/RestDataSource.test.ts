import axios from 'axios';
import { RestDataSource } from './RestDataSource';

// Tests
describe('getCharacters', () => {
  const restDataSource = new RestDataSource();

  beforeEach(() => {
    axios.get = jest.fn();
  })

  describe('getCharacters', () => {
    it('httpClient is called as expected', () => {
      restDataSource.getCharacters();
      expect(axios.get).toHaveBeenCalledWith('https://swapi.co/api/people/');
    });
  });

  describe('searchCharacters', () => {
    const searchString = 'Luke';

    beforeEach(() => {
      axios.get = jest.fn();
    })

    it('httpClient is called as expected', () => {
      restDataSource.searchCharacters(searchString);
      expect(axios.get).toHaveBeenCalledWith(`https://swapi.co/api/people/?search=${searchString}`);
    });
  });
});