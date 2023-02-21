import { render, screen , getByText} from '@testing-library/react';
import *as React from "react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { handleData } from '../actions/shared';
import Leaderboard from '../components/Leaderboard';
import users from '../utils/_DATA';
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
  expect(getByText(/avatar/i)).toBeInTheDocument();
}); 
});

    test ("should take a screenshot of the leaderboard page based on updated info of the store", () => {
        store.dispatch(handleData(users))
        const utils = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Leaderboard />
                </MemoryRouter>
            </Provider>
        );
        
        expect(utils).toMatchSnapshot();
    });