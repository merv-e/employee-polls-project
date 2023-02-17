import { render, screen } from '@testing-library/react';
import *as React from "react";
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); 
  expect(linkElement).toBeInTheDocument();
});

// describe("App", () => {
//   it('should match the snapshot of the App', () => {
//     const view = render(<App/>);
//     expect(view).toMatchSnapshot(); 
//   });
// });
