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
import NewsPage from "./pages/news/NewsPage";
import NewsItemPage from "./pages/news/NewsItemPage";
import { useEffect, useState } from "react";
import OrderPage from "./pages/OrderPage";

const withoutFooterPages = ['/rate']

const App = () => {
  const [ withoutFooter, updateWithoutFooter ] = useState(true);

  useEffect(() => {
    updateWithoutFooter(withoutFooterPages.includes(window.location.pathname));
  }, [window.location.pathname])

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
        <Route exact path="/news">
          <NewsPage />
        </Route>
        <Route path="/news/post/:id">
          <NewsItemPage />
        </Route>
        <Route exact path="/order">
          <OrderPage />
        </Route>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
