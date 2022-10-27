import {
  Route,
  Switch,
} from 'react-router-dom';

import IndexPage from "@/pages/IndexPage";
import Footer from "./components/Footer/Footer";
import RatePage from "./pages/RatePage";
import IPTVPage from "./pages/IPTVPage";
import TelephoniaPage from "./pages/TelephoniaPage";
import SupportPage from "./pages/SupportPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/rate">
          <RatePage />
        </Route>
        <Route path="/iptv">
          <IPTVPage />
        </Route>
        <Route path="/telephonia">
          <TelephoniaPage />
        </Route>
        <Route path="/support">
          <SupportPage />
        </Route>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
