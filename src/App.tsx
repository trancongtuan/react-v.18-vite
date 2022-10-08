import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { ReactComponent as Logo } from 'assets/favicon.svg';

function App() {
  return (
    <div className="App">
      <Header title="hola" />
      <Logo height={100} width={100} />
      <Button onClick={() => alert('tuan tran')}>Heyo</Button>
      <div className="flex flex-wrap"></div>
    </div>
  );
}

export default App;
