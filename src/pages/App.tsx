import { ModalHeaderProvider } from "../context/ModalHeader/ModalHeader";
import Home from "./home/home";

function App() {
  return (
    <ModalHeaderProvider>
      <div className="App">
        <Home/>
      </div>
    </ModalHeaderProvider>
  );
}

export default App;
