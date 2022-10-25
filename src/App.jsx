import {
  Route,
  Switch,
} from 'react-router-dom';

import IndexPage from "@/pages/IndexPage";

const App = () => {
  return (
    <Switch>
      <Route path="/">
        <IndexPage />
      </Route>
    </Switch>
  );
}

export default App;
