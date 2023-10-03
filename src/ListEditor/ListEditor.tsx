import React, { FormEvent } from 'react';
import { ListEntry, ShoppingList, StateSetter } from '../App';

interface ListEditorProps {
  initialEntries?: ListEntry[];
  listTitle?: string;
  setShoppingLists: StateSetter<ShoppingList[]>;
}

function ListEditor({
  initialEntries = [],
  listTitle = 'Nova lista',
  setShoppingLists,
}: ListEditorProps) {
  const [entries, setEntries] = React.useState<ListEntry[]>(initialEntries);

  const updateEntries = function (e: FormEvent) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = new FormData(target);
    const entry: ListEntry = {
      entryName: data.get('entryName')?.toString() ?? '',
      quantity: data.get('quantity')?.toString() ?? '',
      units: data.get('units')?.toString() ?? '',
    };
    setEntries((arr) => arr.concat(entry));
    target.reset();
    (document.querySelector('input[name="entryName"]') as HTMLElement).focus();
  };

  const saveList = () => {
    // @REFACTOR USE FORM

    const dueDate = new Date(
      (document.getElementById('dueTo')! as HTMLInputElement).value
    ).toLocaleDateString('pt-BR');

    const newList: ShoppingList = {
      createdAt: new Date().toLocaleDateString('pt-BR'),
      dueTo: dueDate,
      status: 'pending',
      list: entries,
      listTitle: (document.getElementById('listTitle')! as HTMLInputElement)
        .value,
    };

    setShoppingLists((arr) => arr.concat(newList));
  };

  return (
    <main>
      <h1>Criar uma nova lista:</h1>
      <label>
        Título
        <input id="listTitle" type="text" defaultValue={listTitle} />
      </label>
      <label>
        Data de Compra:
        <input
          id="dueTo"
          type="date"
          defaultValue={new Date().toISOString().slice(0, 10)}
        />
      </label>
      <form onSubmit={updateEntries}>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Unidades</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            <EntriesBuilder entries={entries} setEntries={setEntries} />
            <tr>
              <td>
                <label>
                  Nome:&nbsp;
                  <input type="text" name="entryName" />
                </label>
              </td>
              <td>
                <label>
                  Qtd:&nbsp;
                  <input type="text" name="quantity" />
                </label>
              </td>
              <td>
                <label>
                  Unid:&nbsp;
                  <input type="text" name="units" />
                </label>
              </td>
              <td>
                <button className="btn btn-primary" aria-label="submit">
                  +
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <button className="btn btn-primary" onClick={saveList}>
        Salvar Lista
      </button>
    </main>
  );
}

type EntriesBuilderProps = {
  entries: ListEntry[];
  setEntries: React.Dispatch<React.SetStateAction<ListEntry[]>>;
};

function EntriesBuilder({ entries, setEntries }: EntriesBuilderProps) {
  return entries.map((entry: ListEntry, idx: number) => (
    <EntryDisplay
      key={idx}
      entryName={entry.entryName}
      quantity={entry.quantity}
      units={entry.units}
      selfDelete={() => {
        setEntries((arr) => arr.filter((_, delIdx) => idx != delIdx));
      }}
    />
  ));
}

type EntryDisplayProps = ListEntry & {
  selfDelete: () => void;
};

function EntryDisplay({
  entryName,
  quantity,
  units,
  selfDelete,
}: EntryDisplayProps) {
  return (
    <tr>
      <td>{entryName}</td>
      <td>{quantity}</td>
      <td>{units}</td>
      <td>
        <button
          onClick={selfDelete}
          aria-label={`excluir ${entryName}`}
          className="btn btn-primary"
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default ListEditor;
