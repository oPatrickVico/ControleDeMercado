import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';

function App() {
  return (
    // Usei Routes em vez dum router pois pretendo usar dois tipos: Um pra produção (BrowserRouter), outro pra testes (MemoryRouter). Usar Routes como root facilita os testes por deixar o componente portável (encaixa em qualquer lugar).
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="test" element={<h1>Wazzuuuuup!</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
