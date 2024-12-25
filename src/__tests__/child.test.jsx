import React from "react";
import "@testing-library/jest-dom"
import { fireEvent, render } from "@testing-library/react";
import Child from "../components/child";

test('check props value', () => {
    const {getByTestId} = render(<Child count={500}/>)
    const getElement = getByTestId('count-value')

    expect(getElement.textContent).toBe('500')
})

test('test the button action', () => {
    const {getByTestId} = render(<Child count={200}/>);
    const getBtnElement = getByTestId('toggle-button')
    const getToggleTextElement = getByTestId('toggle-text')

    fireEvent.click(getBtnElement);
    
    expect(getToggleTextElement.textContent).toBe('true')

    fireEvent.click(getBtnElement);

    expect(getToggleTextElement.textContent).toBe('false')
})