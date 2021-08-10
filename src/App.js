import { Route, Switch } from 'react-router-dom';

import { CurrencyProvider } from './store/Currency/currency';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

import './styles/global.css';

function App() {
  return (
    <CurrencyProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Wallet} />
      </Switch>
    </CurrencyProvider>
  );
}

export default App;