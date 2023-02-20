import { render, screen } from "@testing-library/react";
import *as React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import NewPoll from "../components/NewPoll";
// import store from "../index"; //store.js'den al :)
import {store} from "../store";

// test("should have the expected form elements", ()=> {
//         const utils = render(
//             // <Provider store={store}>
//             // <MemoryRouter>
//                     <NewPoll />
//             // </MemoryRouter>
//                 // </Provider>
//         );
        
//         // screen.
//         expect(utils).toMatchSnapshot();
//         // expect(getByTestId("first-option-input")).toBeInTheDocument();
        
//         // const fOption = screen.getByTestId("first-option-input")
//         // expect(fOption).toBeInTheDocument();
// });


// describe("NewPoll", ()=> {
//     it('should have the expected form elements', () => {
//         const utils = render(
//             // <MemoryRouter>
//             //     <Provider store={store}>
//                     <NewPoll />
//             //     </Provider>
//             // </MemoryRouter>
//         );
        
//         // screen.
//         expect(utils).toMatchSnapshot();
//         // expect(getByTestId("first-option-input")).toBeInTheDocument();
        
//         // const fOption = screen.getByTestId("first-option-input")
//         // expect(fOption).toBeInTheDocument();
//     });
// });