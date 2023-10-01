import React, { FormEvent } from 'react';

type ListEntry = {
  entryName: string;
  quantity: string;
  units: string;
};

export default function ListCreator() {
  const [entries, setEntries] = React.useState<ListEntry[]>([]);

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
            <EntriesBuilder entries={entries} />
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
}

const EntryDisplay: React.FC<ListEntry> = ({ entryName, quantity, units }) => {
  return (
    <tr>
      <td>{entryName}</td>
      <td>{quantity}</td>
      <td>{units}</td>
      <td></td>
    </tr>
  );
};

const EntriesBuilder: React.FC<{ entries: ListEntry[] }> = ({ entries }) => {
  return entries.map((entry: ListEntry, idx: number) => (
    <EntryDisplay
      key={idx}
      entryName={entry.entryName}
      quantity={entry.quantity}
      units={entry.units}
    />
  ));
};
