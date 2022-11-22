import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import _ from 'lodash';
import { updateCCTVField } from "../store/order";

export const useSettingsCams = () => {
  const dispatch = useDispatch();
  const camsSettings = useSelector(state => state.settings.cctv);
  const { type, term, camsForBuy, camsCount } = useSelector(state => state.order.cctv);
  const [camsForBuyTotal, updateCamsForBuyTotal] = useState(0);
  const [tabs, updateTabs] = useState([]);

  const updateCamsCount = (value) => dispatch(updateCCTVField({ key: 'camsCount', value }));
  const updateType = (value) => dispatch(updateCCTVField({ key: 'type', value }));
  const updateTerm = (value) => dispatch(updateCCTVField({ key: 'term', value }));
  const updateCamsForBuy = (value) => dispatch(updateCCTVField({ key: 'camsForBuy', value }));

  useEffect(() => {
    if (camsSettings?.camsForBuy) {
      updateCamsForBuy(camsSettings.camsForBuy.map((cam, idx) => ({
        ...cam,
        value: camsForBuy[idx]?.value || 0
      })))
    }

    if (camsSettings?.recordKeepDays) {

      updateTabs(camsSettings.recordKeepDays.map(item => ({
        id: +item,
        value: +item,
        title: `${item} дней`,
      })))
    }
  }, [camsSettings]);

  useEffect(() => {
    if (!!tabs.length && !term) updateTerm(tabs[0].id);
  }, [tabs])

  useEffect(() => {
    const total = camsForBuy.reduce((acc, item) => acc + item.value, 0);
    updateCamsForBuyTotal(total);
  }, [camsForBuy]);

  return () => {
    const updateCountCamsForBuy = (idx, val) => {
      const newCamsForBuy = _.cloneDeep(camsForBuy);
      newCamsForBuy[idx].value = val;
      updateCamsForBuy(newCamsForBuy);
    }

    const getTab = () => tabs.find(tab => tab.id === term);

    const getFirstPrice = () => {
      if (camsForBuy && type === 'ellco') {
        return camsForBuy.reduce((acc, cam) => acc + (cam.value * cam.pricePerMonth), 0);
      }

      return 0;
    }

    const getEveryMonthPrice = () => {
      if (camsSettings) {
        const res = camsSettings?.pricePerDay * getTab()?.value;
        if (type === 'myself') return res * camsCount;
        return res * camsForBuyTotal;
      }
      return 0;
    }

    return {
      type,
      term,
      tabs,
      camsCount,
      camsForBuy,
      camsForBuyTotal,
      updateType,
      updateTerm,
      updateCamsCount,
      updateCountCamsForBuy,
      getTab,
      getFirstPrice,
      getEveryMonthPrice
    }
  }
}
