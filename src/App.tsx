import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="test" element={<h1>Wazzuuuuup!</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
