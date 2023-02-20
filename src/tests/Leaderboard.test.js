import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Leaderboard from '../components/Leaderboard';
// import {store} from "../index"; store.js'den al :)
import {store} from "../store";


describe("Leaderboard", () => {
  it('if the username exist', () => {
    const {getByText} = render(
      <MemoryRouter>
        <Provider store={store}>
          <Leaderboard />;
        </Provider>
      </MemoryRouter>
  );
  expect(getByText(/username/i)).toBeInTheDocument();
}); 
})