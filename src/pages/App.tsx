import { ModalHeaderProvider } from "../context/ModalHeader/ModalHeader";
import CadastroProduto from "./NovoProduto/CadastrarProduto";
import PaginaPadrao from '../components/PaginaPadrao/index';
import { Routes, Route} from 'react-router-dom';
import Cadastrar from "./cadastro/Cadastro";
import Login from "./login/Login";
import Home from "./home/home";
import Produto from "./produto";
import { AuthProvider } from "../auth/auth";
import ContaConfig from "./ContaConfig/contaConfig";
function App() {
  return (
    <ModalHeaderProvider>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Home/>}/>
            <Route path='/produtos/:id' element={<Produto/>}/>
            <Route path='*' element={<h1 className='font-bold text-2xl mt-10'>ERROR: 404 Essa página não existe</h1>}/>
            <Route path='/conta/:id' element={<ContaConfig/>} />
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastrar" element={<Cadastrar/>}/>
          <Route path="/produtos/novo" element={<CadastroProduto/>}/>
        </Routes>
      </AuthProvider>
    </ModalHeaderProvider>
  );
}

export default App;
