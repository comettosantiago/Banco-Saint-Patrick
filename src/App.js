import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Start from './pages/Start.jsx';
import Login from './pages/Login.jsx';
import Main from './pages/Main.jsx';
import Transfer from './pages/Transfer.jsx';
import TransferProcess from './pages/TransferProcess.jsx';
import ConfirmTransfer from './pages/ConfirmTransfer.jsx';
import SuccesfulTransaction from './pages/SuccesfulTransaction.jsx';
import Error404 from './pages/Error404.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/transfer" element={<Transfer/>} />
        <Route path="/transfer/process" element={<TransferProcess/>} />
        <Route path="/transfer/confirm" element={<ConfirmTransfer/>} />
        <Route path="/transfer/sucess" element={<SuccesfulTransaction/>} />
        <Route path="/404" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
