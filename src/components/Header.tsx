import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-unused-modules
export function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`contact`}>Your Name</Link>
          </li>
          <li>
            <Link to={`service`}>Your Friend</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
