import { ShoppingList, StateSetter } from '../App';

type ListManagerProps = {
  shoppingLists: ShoppingList[];
  setShoppingLists: StateSetter<ShoppingList[]>;
};

export default function ListManager({
  shoppingLists,
  setShoppingLists,
}: ListManagerProps) {
  setShoppingLists;

  return (
    <main>
      <h1>Listas de Compra</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <ListsDisplayBuilder shoppingLists={shoppingLists} />
        </tbody>
      </table>
    </main>
  );
}

type ListsBuilderProps = {
  shoppingLists: ShoppingList[];
};

function ListsDisplayBuilder({ shoppingLists }: ListsBuilderProps) {
  return shoppingLists.map((listData, idx) => (
    <ListDisplay listData={listData} key={idx} />
  ));
}

function ListDisplay({ listData }: { listData: ShoppingList }) {
  return (
    <tr>
      <td aria-label={`${listData.listTitle}`}>{listData.listTitle}</td>
      <td aria-label={`${listData.dueTo.toLocaleDateString('pt-BR')}`}>
        {listData.dueTo.toLocaleDateString('pt-BR')}
      </td>
    </tr>
  );
}
