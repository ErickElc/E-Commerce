import { ModalHeaderProvider } from "../context/ModalHeader/ModalHeader";
import CadastroProduto from "./NovoProduto/CadastrarProduto";
import PaginaPadrao from '../components/PaginaPadrao/index';
import { Routes, Route} from 'react-router-dom';
import Cadastro from "./cadastro/Cadastro";
import Login from "./login/Login";
import Home from "./home/home";
import Produto from "./produto";
function App() {
  return (
    <ModalHeaderProvider>
      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route index element={<Home/>}/>
          <Route path='/produtos/:id' element={<Produto/>}/>
          <Route path='*' element={<h1 className='font-bold text-2xl mt-10'>ERROR: 404 Essa página não existe</h1>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/produtos/novo" element={<CadastroProduto/>}/>
      </Routes>
    </ModalHeaderProvider>
  );
}

export default App;
