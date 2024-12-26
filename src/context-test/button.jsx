import React from "react";
import { useTheme } from "./context";

const ThemeToggleButton = () => {
    const { toggleTheme } = useTheme();

    return <button 
        onClick={toggleTheme}
        className="text-center mx-auto block px-4 py-1 bg-black rounded text-lg text-white"
        >
            Toggle Theme
        </button>
}

export default ThemeToggleButton;