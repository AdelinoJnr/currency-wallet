import { Route, Switch } from 'react-router-dom';

import { CurrencyProvider } from './store/Currency/currency';

import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Wallet from './pages/Wallet';
import Cadastro from './pages/Cadastro';
import Detalhes from './pages/Detalhes';
import Sellcurrency from './pages/Sellcurrency';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';

import './styles/global.css';

function App() {
  return (
    <CurrencyProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/depositar" component={Deposit} />
        <Route path="/saque" component={Withdraw} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/wallet/sell/:id" component={Sellcurrency} />
        <Route path="/wallet" component={Wallet} />
        <Route exact path="/:id" component={Detalhes} />
        <Route exact path="/" component={Home} />
      </Switch>
    </CurrencyProvider>
  );
}

export default App;
