import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Leaderboard from '../components/Leaderboard';
import {store} from "../index";



test('renders learn react link', () => {
    const {getByText} = render(
  <Provider store={store}>
    render(<Leaderboard />);
  </Provider>
  );
    // screen.debug();
  // const linkElement = screen.getByText(/add/i);
  expect(screen.getByText(/tylermcginnis/i)).toBeInTheDocument();
});