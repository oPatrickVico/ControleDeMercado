import { ShoppingList, StateSetter } from '../App';

type ListManagerProps = {
  shoppingLists: ShoppingList[];
  setShoppingLists: StateSetter<ListManagerProps[]>;
};

export default function ListManager({
  shoppingLists,
  setShoppingLists,
}: ListManagerProps) {
  return (
    <main>
      <h1>Listas de Compra</h1>
    </main>
  );
}
