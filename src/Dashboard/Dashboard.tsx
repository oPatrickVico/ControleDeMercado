import { Link, Outlet } from 'react-router-dom';

const linkCss = 'nav-link py-3 rounded-0 text-bg-dark p3 ';

export default function Dashboard() {
  return (
    <div id="App" className="h-100 d-flex flex-nowrap">
      <header
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: 150 }}
      >
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li>
            <Link to="list-editor" className={linkCss}>
              Nova lista
            </Link>
          </li>
          <li>
            <Link to="list-manager" className={linkCss}>
              Todas as Listas
            </Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
}
