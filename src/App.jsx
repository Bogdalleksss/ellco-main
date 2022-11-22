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
import { useDispatch, useSelector } from "react-redux";
import { newsFetch } from "./store/news";
import { promotionsFetch } from "./store/promotions";
import { tariffsFetch } from "./store/tariffs";
import { fetchCamsSettings } from "./store/settings";

const withoutFooterPages = ['/rate']

const App = () => {
  const dispatch = useDispatch();
  const [ withoutFooter, updateWithoutFooter ] = useState(true);
  const location = useSelector(state => state.location.location)

  useEffect(() => {
    updateWithoutFooter(withoutFooterPages.includes(window.location.pathname));
  }, [window.location.pathname])

  useEffect(() => {
    dispatch(newsFetch());
    dispatch(promotionsFetch());
    dispatch(tariffsFetch(location.id));
    dispatch(fetchCamsSettings());
  }, [])

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
        <Route path="/stocks/:id">
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
        <Route path="/news/:id">
          <NewsItemPage />
        </Route>
        <Route exact path="/order/:id">
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
