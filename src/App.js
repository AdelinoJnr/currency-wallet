import { Route, Switch } from 'react-router-dom';

import Wallet from './pages/Wallet';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Wallet} />
    </Switch>
  );
}

export default App;
