import TitleH1 from "../UI/TitleH1";
import Button from "../UI/Button";
import { v4 } from "uuid";
import { useScreen } from "../../hooks/useScreen";
import Fade from 'react-reveal/Fade';
import { useSelector } from "react-redux";

import Requisites from '@/assets/documents/requisites.pdf'

const requisites = [
  {
    id: v4(),
    title: 'Генеральный директор',
    data: 'Будунов Каримула Будунович'
  },
  {
    id: v4(),
    title: 'Юридический адрес',
    data: 'РД, Ахвахский р-н, с. Анчих, ул. Анчихская, д. 6, к. А.'
  },
  {
    id: v4(),
    title: 'Почтовый адрес',
    data: 'г.Махачкала, пр. Имама Шамиля 2 «В»'
  },
  {
    id: v4(),
    title: 'Ф-л банка',
    data: 'БАНК ГПБ (АО) г. Москва'
  },
  {
    id: v4(),
    title: 'Р/С',
    data: '40702810000000038057'
  },
  {
    id: v4(),
    title: 'ИНН',
    data: '0503011601'
  },
  {
    id: v4(),
    title: 'КПП',
    data: '050301001'
  },
  {
    id: v4(),
    title: 'ОГРН',
    data: '1160571057437'
  },
  {
    id: v4(),
    title: 'ОКПО',
    data: '03298879'
  },
  {
    id: v4(),
    title: 'К/C',
    data: '30101810200000000823'
  }
]

const SupportSection = () => {
  const { mediaPoint } = useScreen();
  const info = useSelector(state => state.settings.info);

  return (
    <section id="support">
      <div className="support container">
        <TitleH1>Поддерживаем связь</TitleH1>
      </div>
      <div className="support container">
        <div className="support-info flex column flex-jcsb mr-40">
          <div className="support-info__content">
            <Fade bottom delay={200} duration={900}>
              <p className="body body-9 opacity-10 mb-8">Контакты и адреса наших офисов</p>
            </Fade>
            <div className="support-info__buttons flex column gap-4">
              <Fade bottom delay={400} duration={900}>
                <a href={`mailto:${info?.email}`}>
                  <Button className="font-color-bl body body-1" type="button-secondary">{ info?.email }</Button>
                </a>
              </Fade>
              <Fade bottom delay={600} duration={900}>
                <a href={`tel:${info?.phone}`}>
                  <Button className="font-color-bl body body-1" type="button-secondary">{ info?.phone }</Button>
                </a>
              </Fade>
            </div>
          </div>

          {
            mediaPoint >= 1600 &&
              <Fade bottom delay={600} duration={900}>
                <a href={Requisites} target="_blank" rel="noreferrer">
                  <Button>Скачать PDF-файл с реквизитами</Button>
                </a>
              </Fade>
          }
        </div>
        <div className="support-requisites flex-1">
          <ul className="width-full">
            {
              requisites.map((item, idx) => (
                <Fade key={ item.id } bottom delay={200 * (idx + 1)} duration={1000}>
                  <li className="width-full flex flex-jcsb pb-4 mb-4">
                    <p className="body body-9">{ item.title }</p>
                    <p className="body body-9">{ item.data }</p>
                  </li>
                </Fade>
              ))
            }
          </ul>
        </div>
        {
          mediaPoint < 1600 &&
            <Fade bottom delay={100 * requisites.length + 800} duration={900}>
              <a href={Requisites} target="_blank" rel="noreferrer">
                <Button>Скачать PDF-файл с реквизитами</Button>
              </a>
            </Fade>
        }
      </div>
    </section>
  )
}

export default SupportSection;
