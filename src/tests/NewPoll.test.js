import { render, screen } from "@testing-library/react";
import *as React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import NewPoll from "../components/NewPoll";
import {store} from "../store";

    test ("should take a screenshot of the page", () => {
        const utils = render(
            <Provider store={store}>
                <MemoryRouter>
                    <NewPoll />
                </MemoryRouter>
            </Provider>
        );
        
        expect(utils).toMatchSnapshot();
    });
    
    // describe("NewPoll", ()=> {
        //     it('should have the expected form elements', () => {
            //         const utils = render(
                //             // <MemoryRouter>
                //             //     <Provider store={store}>
                //                     <NewPoll />
                //             //     </Provider>
//             // </MemoryRouter>
//         );

// expect(getByTestId("first-option-input")).toBeInTheDocument();

// const fOption = screen.getByTestId("first-option-input")
// expect(fOption).toBeInTheDocument();

//     });
// });