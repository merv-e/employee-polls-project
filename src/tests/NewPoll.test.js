import { render, screen , getByTestId, fireEvent} from "@testing-library/react";
import *as React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
// import { handleAddQuestion } from "../actions/questions";
import NewPoll from "../components/NewPoll";
import {store} from "../store";
    
    describe("NewPoll", ()=> {
        it('should take a screenshot', () => {
            const utils = render(
                <MemoryRouter>
                    <Provider store={store}>
                        <NewPoll />
                   </Provider>
                </MemoryRouter>
            );

            expect(utils).toMatchSnapshot();
            
        });
        
        it('should have the expected form elements', () => {
            const utils = render(
                <MemoryRouter>
                    <Provider store={store}>
                        <NewPoll />
                   </Provider>
                </MemoryRouter>
            );

        const firstOp = utils.getByTestId("first-option-input");
        const secondOp = utils.getByTestId("second-option-input");
        const submitButton = utils.getByTestId("submitBtn");

        // expect(firstOp).toBeInTheDocument();
        // expect(secondOp).toBeInTheDocument();
        // expect(submitButton).toBeInTheDocument();
        
        //events that are going to be fired: 
        fireEvent.change(firstOp, {target : {value : 'React'}});
        fireEvent.change(secondOp, {target : {value : 'Angular'}});
        
        expect(firstOp.value).toBe("React");
        expect(secondOp.value).toBe("Angular");
        
        // fireEvent.click(submitButton);
        
        // expect(firstOp.value).toBe("");
        // expect(secondOp.value).toBe("");


    });
});
