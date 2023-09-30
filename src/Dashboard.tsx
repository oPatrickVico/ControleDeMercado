export function Dashboard() {
  return (
    <main id="App" className="h-100 d-flex flex-nowrap">
      <header
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: 280 }}
      >
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li>
            <a href="/" className="nav-link py-3 rounded-0 text-bg-dark p3 ">
              Pending Lists
            </a>
          </li>
          <li>
            <a href="/" className="nav-link py-3 rounded-0 text-bg-dark p3 ">
              Past Lists
            </a>
          </li>
          <li>
            <a href="/" className="nav-link py-3 rounded-0 text-bg-dark p3 ">
              Template Lists
            </a>
          </li>
          <li>
            <a href="/" className="nav-link py-3 rounded-0 text-bg-dark p3 ">
              Trash List
            </a>
          </li>
        </ul>
      </header>
    </main>
  );
}
