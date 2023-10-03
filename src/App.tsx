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
        <Route path="list-editor" element={<ListEditor />} />
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

export enum ListStatus {
  pending,
  done,
  deleted,
}

export type ShoppingList = {
  id: string;
  createdAt: Date;
  status: ListStatus;
  list: ListEntry[];
};

export type ListEntry = {
  entryName: string;
  quantity: string;
  units: string;
};

export default App;
