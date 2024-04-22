import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {getUpcomingMovies} from '@api/TestApisFunc';
import {BASE_URL} from '@env';

describe('Movies API', () => {
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
  });

  it('fetches movies list successfully', async () => {
    const mockData = {
      results: [
        {id: 1, title: 'Movie 1'},
        {id: 2, title: 'Movie 2'},
      ],
    };

    mock.onGet(`${BASE_URL}/movie/upcoming`).reply(200, mockData);

    const response = await getUpcomingMovies();
    expect(response.data).toEqual(mockData);
  });

  it('handles error when fetching movies list', async () => {
    mock.onGet(`${BASE_URL}/movie/upcoming`).reply(500);

    try {
      await getUpcomingMovies();
    } catch (error: any) {
      expect(error?.response?.status).toBe(500);
    }
  });
});


