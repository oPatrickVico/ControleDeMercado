import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import ListCreator from './ListCreator/ListCreator';

function App() {
  return (
    // Usei Routes em vez dum router pois pretendo usar dois tipos: Um pra produção (BrowserRouter), outro pra testes (MemoryRouter). Usar Routes como root facilita os testes por deixar o componente portável (encaixa em qualquer lugar).
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="newList" element={<ListCreator initialEntries={[]} />} />
      </Route>
    </Routes>
  );
}

export default App;
