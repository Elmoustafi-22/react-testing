import React from "react";
import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/counter";

test('check counter logic', () => {
    const {getByText} = render(<Counter />)
    const getCounterText = getByText('Count is : 0')
    const getButtonElementByText = getByText('Click')

    fireEvent.click(getButtonElementByText);

    expect(getCounterText.textContent).toBe('Count is : 1')

    fireEvent.click(getButtonElementByText)

    expect(getCounterText.textContent).toBe('Count is : 2')
})