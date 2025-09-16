import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AppTarefas from './pages/tarefas/AppTarefas'
import './App.css'
import './tema.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import { useContext, useState } from 'react'
import { ThemeContext, ThemeProviders } from './context/ThemeContext'
import ThemeToggleButton from './pages/tarefas/components/ThemeToggleButton'
import Usuarios from './pages/Usuarios'


function App() {

  return (
    <ThemeProviders>
      <BrowserRouter>
        <div className='claro'>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Sobre">Sobre</Link></li>
              <li><Link to="/tarefas">Tarefas</Link></li>
              <li><Link to="/usuarios">Usuários</Link></li>
            </ul>
          </nav>
          <ThemeToggleButton/>
        </div>
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Sobre" element={<Sobre />}/>
          <Route path="/tarefas" element={<AppTarefas />}/>
          <Route path="/usuarios" element={<Usuarios />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProviders>
  )
}

export default App
