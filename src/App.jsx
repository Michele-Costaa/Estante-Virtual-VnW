import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from "./components/Header/header"
import Inicio from '../../Pages/Inicio/inicio'
import Doados from '../../Pages/Doados/doados'
import QueroDoar from '../../Pages/QueroDoar/queroDoar'
// import S from './header.modules.scss'
import './global.scss'

export default function App() {
  return(
    <BrowserRouter>
     <Header/>

     <Routes>
       <Route path="/" element={<Inicio />} />
       <Route path="/doados" element={<Doados />} />
       <Route path="/quero-doar" element={<QueroDoar />} />
     </Routes>
    </BrowserRouter>
  )
}