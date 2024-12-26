import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null)

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((prevTheme => prevTheme === "light" ? "dark" : "light"))
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}