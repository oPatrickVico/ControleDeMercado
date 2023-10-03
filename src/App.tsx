import { Route, Routes } from 'react-router-dom';
import ListEditor from './ListEditor/ListEditor';
import React from 'react';
import ListManager from './ListManager/ListManager';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const [shoppingList, setShoppingLists] = React.useState<ShoppingList[]>([]);

  return (
    // Usei Routes em vez dum router pois pretendo usar dois tipos: Um pra produção (BrowserRouter), outro pra testes (MemoryRouter). Usar Routes como root facilita os testes por deixar o componente portável (encaixa em qualquer lugar).
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="list-editor"
          element={<ListEditor setShoppingLists={setShoppingLists} />}
        />
        <Route
          path="list-manager"
          element={
            <ListManager
              shoppingLists={shoppingList}
              setShoppingLists={setShoppingLists}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type ListStatus = 'pending' | 'done' | 'deleted';

export type ShoppingList = {
  createdAt: string;
  dueTo: string;
  status: ListStatus;
  list: ListEntry[];
  listTitle: string;
};

export type ListEntry = {
  entryName: string;
  quantity: string;
  units: string;
};

export default App;
