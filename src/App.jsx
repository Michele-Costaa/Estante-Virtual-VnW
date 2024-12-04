import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Inicio from './Pages/Inicio/inicio'
import Doados from './Pages/Doados/doados'
import QueroDoar from './Pages/QueroDoar/queroDoar'
import './global.scss'

export default function App() {
  return(
    <BrowserRouter>
     <Header/>

     <Routes>
       <Route path="/" element={<Inicio />} />
       <Route path="/doados" element={<Doados />} />
       <Route path="/queroDoar" element={<QueroDoar />} />
     </Routes>

     <Footer/>
    </BrowserRouter>
  )
}