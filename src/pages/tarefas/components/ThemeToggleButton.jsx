import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";


const ThemeToggleButton = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    
    return(
        <button onClick={toggleTheme}>
            Mudar para o tema {theme === 'light' ? 'dark' : 'light'}
        </button>
    )
}

export default ThemeToggleButton