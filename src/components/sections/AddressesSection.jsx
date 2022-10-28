import TitleH1 from "../UI/TitleH1";
import Button from "../UI/Button";
import { v4 } from "uuid";
import { useScreen } from "../../hooks/screen";
import Fade from 'react-reveal/Fade';

import Map from '@/assets/img/map.png'

const addresses = [
  {
    id: v4(),
    title: 'Главный офис',
    name: 'г.Махачкала, пр. И.Шамиля, 2 «В»',
    working_time: {
      days: 'ПН-ВС',
      time: {
        start: '09:00',
        end: '18:00',
      }
    }
  },
  {
    id: v4(),
    title: 'Дополнительный офис:',
    name: 'г. Махачкала, пр. А.Акушинского, 88«Е»',
    working_time: {
      days: 'ПН-ВС',
      time: {
        start: '09:00',
        end: '18:00',
      }
    }
  },
  {
    id: v4(),
    title: 'Главный офис:',
    name: 'г.Каспийск, ул.Ленина 37',
    working_time: {
      days: 'ПН-ВС',
      time: {
        start: '09:00',
        end: '19:00',
      }
    },
    weekends: 'СБ',
  },
  {
    id: v4(),
    title: 'Дополнительный офис:',
    name: 'г. Махачкала, пр. А.Акушинского, 88«Е»',
    working_time: {
      days: 'ПН-ВС',
      time: {
        start: '09:00',
        end: '18:00',
      }
    }
  },
]

const SupportSection = () => {
  const { mediaPoint } = useScreen();

  return (
    <section id="addresses">
      <div className="addresses container gap-8">
        {/*<h2>Поддерживаем связь</h2>*/}
        <div className="addresses-wrapper flex height-full pt-8 pb-8 pr-6 pl-6">
          <div className="addresses-list">
            <Fade bottom duration={1500}>
              <div className="addresses-list__wrapper">
                {
                  addresses.map(address => (
                    <div key={address.id} className="addresses-list__block pb-6 mb-6">
                      <p className="body body-6 font-color-bl mb-1">{ address.title }</p>
                      <h4 className="font-color-bl mb-3">{ address.name }</h4>
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
        <Fade bottom delay={200} duration={1500}>
          <div className="map flex-1 height-full" style={{ background: `url(${Map})` }} />
        </Fade>
      </div>
    </section>
  )
}

export default SupportSection;