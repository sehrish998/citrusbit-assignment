import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getAllgenreTest} from '@api/TestApisFunc';
import {BASE_URL, API_KEY} from '@env';


describe('Genres API', () => {
    const mock = new MockAdapter(axios);
  
    afterEach(() => {
      mock.reset();
    });
  
    it('fetches genres list successfully', async () => {
      const mockData = {
        genres: [
          {id: 1, name: 'Action'},
          {id: 2, name: 'Comedy'},
        ],
      };
  
      mock.onGet(`${BASE_URL}/genre/movie/list?language=en&api_key=${API_KEY}`).reply(200, mockData);
  
      const response = await getAllgenreTest();
      expect(response.data).toEqual(mockData);
    });
  
    it('handles error when fetching genres list', async () => {
      mock.onGet(`${BASE_URL}/genre/movie/list?language=en&api_key=${API_KEY}`).reply(500);
  
      try {
        await getAllgenreTest();
      } catch (error: any) {
        expect(error?.response?.status).toBe(500);
      }
    });
  });