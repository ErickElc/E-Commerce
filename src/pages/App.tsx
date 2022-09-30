import { ModalHeaderProvider } from "../context/ModalHeader/ModalHeader";
import { CarrinhoProvider } from "../context/Carrinho/Carrinho";
import CadastroProduto from "./NovoProduto/CadastrarProduto";
import PaginaPadrao from '../components/PaginaPadrao/index';
import ContaConfig from "./ContaConfig/contaConfig";
import { Routes, Route} from 'react-router-dom';
import Cadastrar from "./cadastro/Cadastro";
import { AuthProvider } from "../auth/auth";
import Carrinho from "./Carrinho/Carrinho";
import Login from "./login/Login";
import Produto from "./produto";
import Home from "./home/home";
import Produtos from "./listaProdutos/Produtos";
import Comprar from "./Comprar";
function App() {
  return (
    <ModalHeaderProvider>
      <AuthProvider>
        <CarrinhoProvider>
          <Routes>
            <Route path='/' element={<PaginaPadrao/>}>
              <Route index element={<Home/>}/>
              <Route path='/carrinho' element={<Carrinho/>} />
              <Route path='/produtos' element={<Produtos/>}/>
              <Route path='/produtos/:id' element={<Produto/>}/>
              <Route path='/conta/:id' element={<ContaConfig/>} />
              <Route path='*' element={<h1 className='font-bold text-2xl mt-10'>ERROR: 404 Essa página não existe</h1>}/>
            </Route>
            <Route path='/compras/:id' element={<Comprar/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastrar/:id" element={<Cadastrar/>}/>
            <Route path="/produtos/novo" element={<CadastroProduto/>}/>
          </Routes>
        </CarrinhoProvider>
      </AuthProvider>
    </ModalHeaderProvider>
  );
}

export default App;
