import React, { FormEvent } from 'react';

type ListEntry = {
  title: string;
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
      title: data.get('title')?.toString() ?? '',
      quantity: data.get('quantity')?.toString() ?? '',
      units: data.get('units')?.toString() ?? '',
    };
    setEntries((arr) => arr.concat(entry));
    target.reset();
  };

  return (
    <main>
      <h1>Criar uma nova lista:</h1>
      <form onSubmit={updateEntries}>
        <table>
          <tbody>
            <EntriesBuilder entries={entries} />
            <tr>
              <td>
                <label>
                  Nome:&nbsp;
                  <input type="text" name="title" />
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
                <button aria-label="submit">+</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </main>
  );
}

const EntryDisplay: React.FC<ListEntry> = ({ title, quantity, units }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>{units}</td>
    </tr>
  );
};

const EntriesBuilder: React.FC<{ entries: ListEntry[] }> = ({ entries }) => {
  return entries.map((entry: ListEntry, idx: number) => (
    <EntryDisplay
      key={idx}
      title={entry.title}
      quantity={entry.quantity}
      units={entry.units}
    />
  ));
};
