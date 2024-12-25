import React from "react";
import "@testing-library/jest-dom"
import { render } from "@testing-library/react";
import Child from "../components/child";

test('check props value', () => {
    const {getByTestId} = render(<Child count={500}/>)
    const getElement = getByTestId('count-value')

    expect(getElement.textContent).toBe('500')
})