import { async } from "q";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import Login from "../components/Login";
import { render, getByTestId, fireEvent } from "@testing-library/react";
import {store} from "../store";
import *as React from "react";

describe("Login", () => {
  it('should make sure information of user and password is correct for logging in', async() => {

      const utils = render(
        <MemoryRouter>
          <Provider store={store}>
            <Login />;
          </Provider>
        </MemoryRouter>
      );
      
    const userName = utils.getByTestId("login-name");
    const pWord = utils.getByTestId("login-password");
    const avatar = utils.getByTestId("login-avatar");
    const submitBtn = utils.getByTestId("login-submit");

    fireEvent.change(userName, {target: {value: 'zoshikanlu'}});
    fireEvent.change(pWord, {target: {value: 'notTheRightPassword'}});
    
    expect(userName.value).toBe("zoshikanlu");
    expect(pWord.value).toBe("notTheRightPassword");
    
    fireEvent.click(submitBtn);
    
    //Because a wrong password is given, the user will be still on the login page
    expect(avatar).toBeInTheDocument();
    expect(userName.value).toBe("");
    expect(pWord.value).toBe("");
  });
})