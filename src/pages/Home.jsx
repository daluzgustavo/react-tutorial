import { ThemeContext } from "../context/ThemeContext"

const Home = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <div>
            <h2>Página Inicial</h2>
            <p>Bem-vindos à página inicial desta aplicação gloriosa!</p>
        </div>
    )
}

export default Home;