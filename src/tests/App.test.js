import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from "../components/App";
import {store} from "../store"; //store.js'den al :)
// import { createRenderer } from 'react-dom/test-utils';


test('renders learn react link', () => {
    const {getByText} = render(
  <Provider store={store}>
    render(<App />);
  </Provider>
  );
    // screen.debug();
  // const linkElement = screen.getByText(/add/i);
  expect(screen.queryByText(/hello/i)).not.toBeInTheDocument();
});
