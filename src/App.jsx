import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AppTarefas from './pages/tarefas/AppTarefas'
import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import { useState } from 'react'
import { ThemeProviders } from './context/ThemeContext'
import ThemeToggleButton from './pages/tarefas/components/ThemeToggleButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProviders>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Sobre">Sobre</Link></li>
              <li><Link to="/tarefas">Tarefas</Link></li>
            </ul>
          </nav>
          <ThemeToggleButton/>
        </div>
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Sobre" element={<Sobre />}/>
          <Route path="/tarefas" element={<AppTarefas />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProviders>
  )
}

export default App
