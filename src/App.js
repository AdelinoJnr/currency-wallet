import { Route, Switch } from 'react-router-dom';

import { CurrencyProvider } from './store/Currency/currency';
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Wallet from './pages/Wallet';

import './styles/global.css';

function App() {
  return (
    <CurrencyProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/wallet" component={Wallet} />
        <Route exact path="/" component={Home} />
      </Switch>
    </CurrencyProvider>
  );
}

export default App;
