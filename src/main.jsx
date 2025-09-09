import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Paragrafo from './Paragrafo.jsx'
import CaixaTexto from './CaixaTexto.jsx'
import ThemeToggleButton from './pages/tarefas/components/ThemeToggleButton'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppTarefas /> */}
    <App />
    {/* <Paragrafo nome="Rafael" />
    <Paragrafo nome="Maria" />
    <CaixaTexto /> */}
  </StrictMode>,
)
