import { Link, Outlet } from 'react-router-dom';

const linkCss = 'nav-link py-3 rounded-0 text-bg-dark p3 ';

export function Dashboard() {
  return (
    <div id="App" className="h-100 d-flex flex-nowrap">
      <header
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: 150 }}
      >
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li>
            <Link to="newList" className={linkCss}>
              Nova lista
            </Link>
          </li>
          <li>
            <a href="/" className={linkCss}>
              Pending Lists
            </a>
          </li>
          <li>
            <a href="/" className={linkCss}>
              Past Lists
            </a>
          </li>
          <li>
            <a href="/" className={linkCss}>
              Template Lists
            </a>
          </li>
          <li>
            <a href="/" className={linkCss}>
              Trash List
            </a>
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
}
