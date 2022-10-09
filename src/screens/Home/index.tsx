import { Header } from 'components/Header';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="home">Home page</div>
      <Header />
      <Outlet />
    </>
  );
}

// eslint-disable-next-line import/no-unused-modules
export default Home;
