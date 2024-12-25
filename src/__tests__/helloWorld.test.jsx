import { render } from "@testing-library/react"
import HelloWorld from "../components/helloWorld"
import "@testing-library/jest-dom"


test("render hello world text", () => {
    const {getByText} = render(<HelloWorld />)
    const checkText = getByText('Hello World')

    expect(checkText).toBeInTheDocument()
})

test("check Mustopha Abdulqadir text by test id", () => {
    const {getByTestId} = render(<HelloWorld />)
    const getElement = getByTestId('name')

    expect(getElement.textContent).toBe('Mustopha Abdulqadir')
})