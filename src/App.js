import { Route, Switch } from 'react-router-dom';
import RouteWrapper from './helpers/RouteWrapper';
import About from './pages/About';
import Home from './pages/Home';
import Forms from './pages/Forms';
import FormsData from './pages/FormsData';
import { LayoutAdmin, LayoutNormal } from './pages/Layouts';
import Notfound from './pages/Notfound';

function App() {
  return (
    <>
      <Switch>
        <RouteWrapper path="/" exact component={Home} layout={LayoutNormal} />
        <RouteWrapper path="/about" component={About} layout={LayoutAdmin} />
        <RouteWrapper path="/forms" component={Forms} layout={LayoutNormal} />
        <RouteWrapper path="/formsData" component={FormsData} layout={LayoutNormal} />
        <Route path="*" component={Notfound} exact />
      </Switch>
    </>
  );
}

export default App;
