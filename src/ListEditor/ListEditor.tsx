import React, { FormEvent } from 'react';
import { ListEntry } from '../App';

const ListEditor: React.FC<{
  initialEntries?: ListEntry[];
  listTitle?: string;
}> = ({ initialEntries = [], listTitle = 'Nova lista' }) => {
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

  return (
    <main>
      <h1>Criar uma nova lista:</h1>
      <label>
        Título
        <input type="text" defaultValue={listTitle} />
      </label>
      <label>
        Data de Compra:
        <input
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
                  Uni:&nbsp;
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
    </main>
  );
};

const EntriesBuilder: React.FC<{
  entries: ListEntry[];
  setEntries: React.Dispatch<React.SetStateAction<ListEntry[]>>;
}> = ({ entries, setEntries }) => {
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
};

const EntryDisplay: React.FC<ListEntry & { selfDelete: () => void }> = ({
  entryName,
  quantity,
  units,
  selfDelete,
}) => {
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
};

export default ListEditor;
