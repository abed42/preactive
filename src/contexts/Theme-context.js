import { createContext  } from "react";


export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {
    return (
        <ThemeContext.Provider value="do">
            {props.children}
        </ThemeContext.Provider>

    )
}



export default ThemeContextProvider;