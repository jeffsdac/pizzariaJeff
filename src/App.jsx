import Header from './Components/Parts/Header';
import Footer from './Components/Parts/Footer';
import Home from './Components/FullPages/Home'
import ChecarPedidos from './Components/FullPages/ChecarPedidos'
import FazerPedidos from './Components/FullPages/FazerPedidos'
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import FormCadastro from './Components/FullPages/FormCadastro';


function App() {


  const [pageAtiva, setPageAtiva] = useState('/')

  const mudarPage = (nome) =>{
    setPageAtiva(nome)
  }

  return (
        <BrowserRouter>
          <div className="bg-zinc-900 flex items-center justify-center flex-col">
          <Header page={pageAtiva} mudarPage={mudarPage}/>
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/checar' element={<ChecarPedidos/>}></Route>
            <Route path='/pedidos' element={<FazerPedidos/>}></Route>
            <Route path='/cadastro' element={<FormCadastro/>}></Route>
          </Routes>
          <Footer/>
          </div>
        </BrowserRouter>
  )
}

export default App
