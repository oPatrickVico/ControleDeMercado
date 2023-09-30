export default function ListCreator() {
  return (
    <main>
      <h1>Criar uma nova lista:</h1>
      <form>
        <label>
          Nome:&nbsp;
          <input type="text" name="name" />
        </label>{' '}
        <label>
          Qtd:&nbsp;
          <input type="text" name="amount" />
        </label>{' '}
        <label>
          Uni:&nbsp;
          <input type="text" name="unit" />
        </label>
      </form>
    </main>
  );
}
