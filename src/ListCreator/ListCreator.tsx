export default function ListCreator() {
  return (
    <main>
      <h1>Criar uma nova lista:</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>
                  Nome:&nbsp;
                  <input type="text" name="name" />
                </label>
              </td>
              <td>
                <label>
                  Qtd:&nbsp;
                  <input type="text" name="amount" />
                </label>
              </td>
              <td>
                <label>
                  Uni:&nbsp;
                  <input type="text" name="unit" />
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
