import { useState } from "react";


function Child({count}) {
    const [theme, setTheme] = useState(false)
    return (
        <div  className="mt-4">
            <p data-testid="count-value">{count}</p>
            <button 
                data-testid="toggle-button"
                onClick={() => setTheme(!theme)}
                className="mt-2 px-4 py-1 bg-slate-50 rounded border border-gray-950"
            >
                Toggle
            </button>
            <h1 data-testid="toggle-text">{theme ? 'true' : 'false'}</h1>
        </div>
    );
}

export default Child;