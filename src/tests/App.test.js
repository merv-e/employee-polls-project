import { render, screen } from '@testing-library/react';
import *as React from "react";
import { Provider } from 'react-redux';
import App from "../components/App";
import {store} from "..//store"; 
import { MemoryRouter } from 'react-router';

//if there is only one test - use "test" , else "describe"

// Note: just a random test
test('the string "hello" won\'t be in the App component', () => {
    const {queryByText} = render(
      <MemoryRouter>
        <Provider store={store}>
          render(<App />);
        </Provider>
      </MemoryRouter>
  );
    
  expect(queryByText(/hello/i)).not.toBeInTheDocument();
});
