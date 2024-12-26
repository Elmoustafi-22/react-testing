import React from "react";
import { useTheme } from "./context";

export default function ThemeContent(){
    const {theme} = useTheme()

    return (
        <div className="mt-20 text-center">
            <h1 className="text-4xl font-semibold">{theme === "light" ? "Light theme" : "Dark theme"}</h1>
            <p className="text-xl my-4">This is some random content!</p>
        </div>
    )
}