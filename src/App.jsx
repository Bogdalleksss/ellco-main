import IndexPage from "@/pages/IndexPage";
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
import { fetchCamsSettings, fetchInformation } from "./store/settings";
import {
  Route,
  Switch,
} from 'react-router-dom';
import { searchLocation, setLocation } from "./store/location";

const withoutFooterPages = ['/rate']

const App = () => {
  const dispatch = useDispatch();
  const [ withoutFooter, updateWithoutFooter ] = useState(true);
  const location = useSelector(state => state.location.location);
  const locations = useSelector(state => state.location.locations);

  useEffect( () => {
    fetchLocation();
    dispatch(fetchInformation());
    dispatch(newsFetch());
    dispatch(promotionsFetch());
    dispatch(fetchCamsSettings());
  }, []);

  useEffect(() => {
    updateWithoutFooter(withoutFooterPages.includes(window.location.pathname));
  }, [window.location.pathname])

  useEffect(() => {
    if (location?.id) dispatch(tariffsFetch(location.id));
  }, [location]);

  useEffect(() => {
    const startLocation = locations.find(item => item.title.toLowerCase() === "махачкала");
    if (startLocation) dispatch(setLocation(startLocation));
  }, [locations])

  const fetchLocation = async () => {
    const myLocation = localStorage.location;

    if (!myLocation) {
      await dispatch(searchLocation('Махачкала'));
    }
  }

  return (
    <div className={navigator.appVersion.indexOf('Win') !== -1 ? 'windows' : ''}>
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
        <Route path="/cctv">
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
    </div>
  );
}

export default App;
