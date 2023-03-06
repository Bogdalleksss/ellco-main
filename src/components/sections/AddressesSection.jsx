import { v4 } from "uuid";
import { useScreen } from "../../hooks/useScreen";
import Fade from 'react-reveal/Fade';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import IconStripes from "../icons/IconStripes";
import IconMarkerMap from "../icons/IconMarkerMap";
import { useState } from "react";
import MapMarker from '@/assets/img/map-marker.svg';

const addresses = [
  {
    id: v4(),
    title: 'Главный офис',
    name: 'г. Махачкала, пр. И. Шамиля, 2В',
    coords: [42.982618, 47.469702],
    working_time: {
      days: 'ПН–ВС',
      time: {
        start: '9:00',
        end: '18:00',
      }
    }
  },
  {
    id: v4(),
    title: 'Дополнительный офис:',
    name: 'г. Махачкала, пр. А. Акушинского, 88Е',
    coords: [42.978931, 47.449444],
    working_time: {
      days: 'ПН–ВС',
      time: {
        start: '9:00',
        end: '18:00',
      }
    }
  },
  {
    id: v4(),
    title: 'Главный офис:',
    name: 'г. Каспийск, ул. Ленина, 37',
    coords: [42.899307, 47.627742],
    working_time: {
      days: 'ПН–ВС',
      time: {
        start: '9:00',
        end: '19:00',
      }
    },
    weekends: 'СБ',
  },
]

const SupportSection = () => {
  const { mediaPoint } = useScreen();
  const [ location, updateLocation ] = useState(addresses[0]);

  const mapState = () => ({
    center: location.coords,
    zoom: 18,
    behaviors: []
  });

  return (
    <section id="addresses">
      <div className="addresses container gap-8">
        {
          mediaPoint <= 1024
            ? <h3 className="flex gap-3 font-color-bl mb-6">
                <IconStripes fill="#054FD6"/>
                <span className="flex pt-1">Офисы продаж и обслуживания</span>
              </h3>
            : <></>
        }
        <div className="addresses-wrapper flex height-full pt-8 pb-8 pr-6 pl-6">
          <div className="addresses-list">
            <Fade bottom duration={900}>
              <div className="addresses-list__wrapper">
                {
                  addresses.map(address => (
                    <div
                      key={address.id}
                      className={`addresses-list__block pb-6 mb-6 ${location.id === address.id && 'active'}`}
                      onClick={() => updateLocation(address)}
                    >
                      <p className="body body-6 font-color-bl mb-1">{ address.title }</p>
                      <h4 className="font-color-bl mb-3">
                        <span>
                          <IconMarkerMap fill="#054FD6"/>
                        </span>
                        { address.name }
                      </h4>
                      <p className="addresses-list__block__time body body-6 font-color-bl flex flex-aic opacity-10">
                        <span>{ address.working_time.days }</span>
                        <span>{ address.working_time.time.start } - { address.working_time.time.end }</span>
                      </p>
                      {
                        address.weekends
                          ? <p className="addresses-list__block__time body body-6 font-color-bl flex flex-aic opacity-10 mt-1">
                            <span>{ address.weekends }</span>
                            <span>Выходной</span>
                          </p>
                          : <></>
                      }
                    </div>
                  ))
                }
              </div>
            </Fade>
          </div>
        </div>
        {
          location && <Fade bottom delay={200} duration={900}>
            <div className="map flex-1 height-full">
              <YMaps>
                <Map
                  width="100%"
                  height="511px"
                  state={mapState()}
                >

                  <Placemark
                    geometry={location.coords}
                    options={{
                      iconLayout: 'default#image',
                      iconImageHref: MapMarker,
                      iconImageSize: [30, 42],
                      iconImageOffset: [-3, -42]
                    }}
                  />

                </Map>
              </YMaps>
            </div>
            {/*<div className="map flex-1 height-full" style={{ background: `url(${Map})` }} />*/}
          </Fade>
        }
      </div>
    </section>
  )
}

export default SupportSection;
