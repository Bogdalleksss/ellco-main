import {
  Route,
  Switch,
} from 'react-router-dom';

import IndexPage from "@/pages/IndexPage";
import Footer from "./components/Footer/Footer";
import RatePage from "./pages/RatePage";
import IPTVPage from "./pages/IPTVPage";
import TelephoniaPage from "./pages/TelephonyPage";
import SupportPage from "./pages/SupportPage";
import NewsPage from "./pages/news/NewsPage";
import NewsItemPage from "./pages/news/NewsItemPage";
import { useEffect, useState } from "react";
import OrderPage from "./pages/OrderPage";
import StockPage from "./pages/StockPage";
import SmotreshkaPage from "./pages/SmotreshkaPage";
import KionPage from "./pages/KionPage";
import VideosurveillancePage from "./pages/VideosurveillancePage";

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
        <Route path="/telephony">
          <TelephoniaPage />
        </Route>
        <Route path="/videosurveillance">
          <VideosurveillancePage />
        </Route>
        <Route path="/stock">
          <StockPage />
        </Route>
        <Route path="/smotreshka">
          <SmotreshkaPage />
        </Route>
        <Route path="/kion">
          <KionPage />
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
