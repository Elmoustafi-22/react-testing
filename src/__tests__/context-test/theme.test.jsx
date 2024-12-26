import React from "react";
import "@testing-library/jest-dom"
import { render } from "@testing-library/react";
import { ThemeProvider } from "../../context-test/context";
import ThemeContent from "../../context-test/theme";

describe("test the theme content", () => {
    it("checks it renders current theme", () => {
        const {getByText} = render(<ThemeProvider>
            <ThemeContent />
        </ThemeProvider>)

        const getText = getByText('Light theme')

        expect(getText).toBeInTheDocument()
    })
})